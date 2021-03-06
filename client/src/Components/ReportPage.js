import React, { useState } from "react";
import { useForm, useFieldArray, Controller, useWatch } from "react-hook-form";

const ConditionalInput = ({ control, index, item }) => {
  const value = useWatch({
    name: "plan",
    control
  });
  return (
    <Controller
      control={control}
      name={`plan.${index}.completed`}
      render={({ item }) =>
        !value?.[index]?.completed ? <option value="0">00:00</option> : null
      }
      defaultValue={item.completed}
    />
  );
};

const Total = ({ control }) => {
  const formValues = useWatch({
    name: "plan",
    control
  });
  const totalT = formValues.reduce(
    (acc, current) => acc + (current.time || 0),
    0
  );
  const sec = parseInt(totalT, 10); // convert totalT to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  // add 0 if timeValue < 10; Example: 2 => 02
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return `Total Time = ${hours}:${minutes}`;
};

function ReportPage() {
  const [counter, setCounter] = useState(4);

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      plan: [
        {
          id: 1,
          task: "task taken from plan",
          report: "",
          time: 10800,
          completed: false
        },
        {
          id: 2,
          task: "task taken from plan",
          report: "",
          time: 10800,
          completed: false
        },
        {
          id: 3,
          task: "task taken from plan",
          report: "",
          time: 7200,
          completed: false
        }
      ]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    keyName: "key",
    name: "plan"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  let inputs = fields.map((item, index) => {
    return (
      <div key={item.key}>
        <div>
          {item.task === "" ? (
            <textarea
              placeholder="new task"
              {...register(`plan.${index}.task`, { required: true })}
            />
          ) : (
            <p> {item.task}</p>
          )}
        </div>

        <input
          type="checkbox"
          value="true"
          {...register(`plan.${index}.completed`)}
          defaultChecked={item.checked}
        />

        <textarea
          placeholder="report"
          {...register(`plan.${index}.report`, { required: true })}
        />

        <select
          {...register(`plan.${index}.time`, {
            valueAsNumber: true,
            required: true
          })}
        >
          <ConditionalInput {...{ control, index, item }} />
          <option value="900">00:15</option>
          <option value="1800">00:30</option>
          <option value="3600">01:00</option>
          <option value="5400">01:30</option>
          <option value="7200">02:00</option>
          <option value="9000">02:30</option>
          <option value="10800">03:00</option>
          <option value="12600">03:30</option>
          <option value="14400">04:00</option>
          <option value="16200">04:30</option>
          <option value="18000">05:00</option>
          <option value="19800">05:30</option>
          <option value="21600">06:00</option>
          <option value="23400">06:30</option>
          <option value="25200">07:00</option>
          <option value="27000">07:30</option>
          <option value="28800">08:00</option>
        </select>

        <button
          type="button"
          onClick={() => (index > 2 ? remove(index) : null)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Fill your report </h1>
        <div>{inputs}</div>

        <Total control={control} />

        <section>
          <button
            type="button"
            onClick={() => {
              append(
                {
                  id: counter,
                  task: "",
                  report: "",
                  time: 0,
                  completed: false
                }
              );
              setCounter(counter + 1);
            }}
          >
            add
          </button>
        </section>

        <button type="submit"> Submit </button>
      </form>
    </center>
  );
}
export default ReportPage;
import React from "react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
// import { whatever } from "react-bootstrap";

const Total = ({ control }) => {
  const formValues = useWatch({
    name: "plan",
    control
  });
  const total = formValues.reduce(
    (acc, current) => acc + (current.time || 0),
    0
  );
  const sec = parseInt(total, 10); // convert total to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  // let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if timeValue < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  // if (seconds < 10) {seconds = "0"+seconds;}
  return `Total Time = ${hours}:${minutes}` 
};

function UserPlan() {

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      plan: [
        { task: "", time: 0 },
        { task: "", time: 0 },
        { task: "", time: 0 }
      ]
    }
  });
  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "plan"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Fill your plan </h1>

        <div>
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <textarea placeholder="task"
                  {...register(`plan.${index}.task`, { required: true })} />

                <select
                 {...register(`plan.${index}.time`, {
                  required: true,
                  valueAsNumber: true
                })} >
                  {/* <option /> */}
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
                </select >

                <button type="button" onClick={() => index > 2 ? remove(index) : null}>
                  Delete
                </button>
              </div>

            );
          })}
        </div>

        <Total control={control} />

        <section>
          <button
            type="button"
            onClick= {() => append({ task: "", time: 0 })}>
            add
          </button>
        </section>

        <button type="submit" > Submit </button>
      </form>
    </center>
  );
}
export default UserPlan;
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import { whatever } from "react-bootstrap";


function UserPlan() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      plan: [
          { task: "", time: "" },
          { task: "", time: "" },
          { task: "", time: "" }
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

  const onSubmit = (data) => console.log(data);

  return (
    <center>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Fill your plan </h1>
       <ol>
        {fields.map((item, index) => {
          return (

            <li key={item.id}>
              <textarea placeholder="task"
                {...register(`plan.${index}.task`, { required: true })} />

                <select {...register(`plan.${index}.time`, {
                        required: true,
                        validate: value =>
                            value !== "00:00"
                    })} >
                    <option />
                    <option value="00:15">00:15</option>
                    <option value="00:30">00:30</option>
                    <option value="01:00">01:00</option>
                    <option value="01:30">01:30</option>
                    <option value="02:00">02:00</option>
                    <option value="02:30">02:30</option>
                    <option value="03:00">03:00</option>
                    <option value="03:30">03:30</option>
                    <option value="04:00">04:00</option>
                    <option value="04:30">04:30</option>
                    <option value="05:00">05:00</option>
                    <option value="05:30">05:30</option>
                    <option value="06:00">06:00</option>
                    <option value="06:30">06:30</option>
                    <option value="07:00">07:00</option>
                    <option value="07:30">07:30</option>
                    <option value="08:00">08:00</option>
                </select >

              <button type="button" onClick={() => index > 2 ? remove(index) : null}>
                Delete
            </button>
            </li>

          );
        })}
      </ol>
      <section>
        <button
          type="button"
          onClick={() => {
            append({ task: "", time: "" });
          }}
        >
          add
      </button>

      </section>

      <button type="submit" > Submit </button>
    </form>
    </center>
  );
}
export default UserPlan;
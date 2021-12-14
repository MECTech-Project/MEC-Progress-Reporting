import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Button } from "react-bootstrap";


const initialList = [
    {
        id: 1,
        name: "task 1",
        remove: true,
        time: "time 1"
    },
    {
        id: 2,
        name: "task 2",
        remove: true,
        time: "time 2"

    },
    {
        id: 3,
        name: "task 3",
        remove: true,
        time: "time 3"

    }

];

export default function UserPlan() {
    const { register, handleSubmit, resetField } = useForm();
    const [lists, setList] = useState(initialList);

    const onSubmit = (data) => {
        console.log(data);
    }

    function handleAddPlan() {
        setList([
            ...lists,
            {
                id: lists.length + 1,
                name: `task ${lists.length + 1}`,
                remove: false,
                time: `time ${lists.length + 1}`
            }
        ]);
        console.log("lists", lists)
    }

    function handleRemove(id, remove, name) {
        if (remove === false) {

            let ifTrue = lists.filter((list) => list.remove === true);
            console.log("ifTrue", ifTrue)
            let ifFalse = lists.filter((list) => list.remove === false);
            console.log("ifFalse", ifFalse)
            let main = ifFalse.filter((list) => list.id !== id);

            resetField(`${name}`)
            console.log("name", name)

            let falseRemove = main.map((x, i) => {
                return {
                    id: i + 4,
                    name: `task ${i + 4}`,
                    remove: false,
                    // time: lists.time
                }
            })

            setList([
                ...ifTrue, ...falseRemove
            ]);
            console.log("falseRemove", falseRemove)
        }
    }


    const inputs = lists.map((list) => {

        return (

            <div key={list.id}>
                <Stack direction="horizontal" gap={3}>
                    <textarea
                        className="me-auto"
                        {...register(`${list.name}`, { required: true })}
                        placeholder={`Plan ${list.id} ${list.name}`}
                    />

                    <input type="time" id="appt" name="appt"
                        min="09:00" max="18:00" required 
                        {...register(`${list.time}`, { required: true })}
                    />

                    <div className="vr" />
                    <Button onClick={() => handleRemove(list.id, list.remove, list.name)} >✖</Button>
                </Stack>

            </div>
        );
    });

    return (
        <div className="container">
            <h1 className="text-center">Fill your plan</h1>
            {inputs}
            <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit</Button>
            <Button onClick={handleAddPlan}>Add</Button>
        </div>
    );
}
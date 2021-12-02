import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Stack, Button } from "react-bootstrap";
import WorkTime from "./WorkTime";


const initialList = [
    {
        plan: 1,
        name: "task 1",
        remove: true
    },
    {
        plan: 2,
        name: "task 2",
        remove: true

    },
    {
        plan: 3,
        name: "task 3",
        remove: true
    }
];

export default function App() {
    const { register, handleSubmit } = useForm();
    const [lists, setList] = useState(initialList);

    const onSubmit = (data) => console.log(data);

    function handleAddPlan() {
        setList([
            ...lists,
            {
                plan: lists.length + +1,
                name: `task ${lists.length + +1}`,
                remove: false
            }
        ]);
    }

    function handleRemove(plan, remove) {
        console.log(remove)
        if ( remove === false ) {

                console.log("baba")
        setList(lists.filter((list) => list.plan !== plan))
}
    }

    console.log(lists);

    const inputs = lists.map((list) => {

        return (
            <div key={list.plan}>
                <Stack onSubmit={handleSubmit(onSubmit)} direction="horizontal" gap={3}>

                <input
                    className="me-auto"
                    {...register(`${list.name}`, { required: true })}
                    placeholder={`plan ${list.plan} ${list.name}`}
                />
                <div style={{ width: "140px" }}>
                    <WorkTime />
                </div>
                <Button onClick={() => handleRemove(list.plan, list.remove)}>✖</Button>
                </Stack>

            </div>
        );
    });

    return (
        <div className="container">
            <h1 className="text-center">Fill your Plan</h1>
                {inputs}
            <Button type="submit" >Submit</Button>
            <div className="vr" />
            <Button onClick={handleAddPlan}>Add</Button>
        </div>
    );
}

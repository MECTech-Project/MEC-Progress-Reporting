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
    const { register, handleSubmit, resetField } = useForm();
    const [lists, setList] = useState(initialList);

    const onSubmit = (data) => console.log(data);

    function handleAddPlan() {
        setList([
            ...lists,
            {
                plan: lists.length + 1,
                name: `task ${lists.length + 1}`,
                remove: false
            }
        ]);
        console.log("lists", lists)
    }

    function handleRemove(plan, remove, name) {              
        if (remove === false) {

            let ifTrue = lists.filter((list) => list.remove === true);
            console.log("ifTrue", ifTrue)
            let ifFalse = lists.filter((list) => list.remove === false);
            console.log("ifFalse", ifFalse)
            let main = ifFalse.filter((list) => list.plan !== plan);

            resetField(`${name}`)
            console.log("name", name)
            
            let falseRemove = main.map((x, i) => {
                return {
                    plan: i + 4,
                    name: `task ${i + 4}`,
                    remove: false
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

            <div key={list.plan}>
                <Stack direction="horizontal" gap={3}>
                    <textarea
                        className="me-auto"
                        {...register(`${list.name}`, { required: true })}
                        placeholder={`plan ${list.plan} ${list.name}`}
                    />
                    <div style={{ width: "80px" }}>
                        <WorkTime />
                    </div>
                    <div className="vr" />
                    <Button onClick={() => handleRemove(list.plan, list.remove, list.name)} >✖</Button>
                </Stack>

            </div>
        );
    });

    // useEffect(() => {
    //     console.log("render")
    //     lists.addEventListener('', handleRemove)
    // },[])

    return (
        <div className="container">
            <h1 className="text-center">Fill your Plan</h1>
            {inputs}
            <Button type="submit" onClick={handleSubmit(onSubmit)}>Submit</Button>
            <Button onClick={handleAddPlan}>Add</Button>
        </div>
    );
}

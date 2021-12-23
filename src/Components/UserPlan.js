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
    //     let cleanData = [];
    //     for(const [key, value] of Object.entries(data)) {
    //         const number = parseInt(key.charAt(key.length-1))-1
    //         if (!cleanData[number]) {
    //             cleanData.push([value]);
    //         } else {
    //             cleanData[number].push(value); 
    //         }
    //     }
    //     console.log(`data`,cleanData);
    for (let i = 0; i < 2; i++) {
        const element = "me";
        for(const [key, value] of Object.entries(data))
        console.log("from for", {[key]: value})
        
    }
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
    }

    function handleRemove(id, remove, name, time) {
        if (remove === false) {

            let ifTrue = lists.filter((list) => list.remove === true);
            console.log("ifTrue", ifTrue)
            let ifFalse = lists.filter((list) => list.remove === false);
            console.log("ifFalse", ifFalse)
            let main = ifFalse.filter((list) => list.id !== id);

            resetField(`${name} ${time}`)
            console.log("name", name, time)

            let falseRemove = main.map((e, i) => {
                return {
                    id: i + 4,
                    name: `task ${i + 4}`,
                    remove: false,
                    time: e.time
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
                <Stack direction="horizontal" >
                    <textarea
                        type="text"
                        className="me-auto"
                        {...register(`${list.name}`, { required: true })}
                        placeholder={`Plan ${list.id} ${list.name}`}
                    />
                    <div className="dropdown">
                        <div >
                        <select className="dropdown-content dropbtn" {...register(`${list.time}`, { required: true })} >
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
                        </div>
                    </div>

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
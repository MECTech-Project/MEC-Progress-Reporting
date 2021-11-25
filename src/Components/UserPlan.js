import React, { useState } from "react";
import { Stack, Form, Button } from "react-bootstrap";

const initialList = [
    {
        plan: 1
    },
    {
        plan: 2
    },
    {
        plan: 3
    }

];

function UserPlan() {

    const [lists, setList] = useState(initialList)

    function handleAddPlan() {
        setList([...lists, {
            plan: lists.length += 1
        }])
    }
    function handleRemove(plan){
        setList(lists.filter(list => list.plan !== plan))
    };
    return (
        <div className="container">
            <h1 className="text-center">Fill your Plan</h1>
            <ul>
                {lists.map(list => (
                    <li key={list.plan}>
                        <Stack direction="horizontal" gap={5}>
                            <Form.Control className="me-auto" placeholder="Add your plan here..." />
                            <input type="time" min="09:00" max="18:00" required />
                            <div className="vr" />
                            <Button  variant="outline-light" onClick={() => handleRemove(list.plan)}>✖</Button>
                        </Stack>
                    </li>
                ))}
            </ul>
            <Button variant="outline-light" onClick={handleAddPlan}> Add a Plan </Button>

        </div>
    )

}

export default UserPlan
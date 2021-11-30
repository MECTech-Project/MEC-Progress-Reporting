import React, { useState, useRef, useEffect } from "react";
import { Stack, Button } from "react-bootstrap";
import WorkTime from "./WorkTime";

const initialList = [
    {
        plan: 1,
    }

];

function UserPlan() {

    const [lists, setList] = useState(initialList);

    const [planText, setPlanText] = useState("")

    const inputRef = useRef([])
    // inputRef.current = []
    function submit(e) {
        console.log(inputRef.current.value)
        // if (e && !inputRef.current.includes(e)) {
        //     inputRef.current.push(e);
        // }

    }

    function handleAddPlan() {
        setList([...lists, {
            plan: lists.length + +1
        }])
    };
    function handleRemove(plan) {
        setList(lists.filter(list => list.plan !== plan))
    };
    const handlePlanChange = (e) => {
        setPlanText(e.target.value);
    }
    // const addtolist = (e) =>{
    //     if(e && inputRef.current.includes(e)){
    //         inputRef.current.push(e);
    //     }
    //     console.log(inputRef.current)
    // }


    const Component = () => {

        const [length, setLength] = useState(2);
        const refs = useRef([React.createRef(), React.createRef()]);
      
        function updateLength({ target: { value }}) {
          setLength(value);
          refs.current = refs.current.splice(0, value);
          for(let i = 0; i< value; i++) {
            refs.current[i] = refs.current[i] || React.createRef();
          }
          refs.current = refs.current.map((item) => item || React.createRef());
        }
      
        useEffect(() => {
         refs.current[refs.current.length - 1].current.focus()
        }, [length]);
      
        return (<>
          <ul>
          {refs.current.map((el, i) =>
            <li key={i}><input ref={refs.current[i]} value={i} /></li>
          )}
        </ul>
        <input value={refs.current.length} type="number" onChange={updateLength} />
        </>)
      }


    return (
        <div className="container">
            <h1 className="text-center">Fill your Plan</h1>
            <ul >
                {Component}
                {/* {
                    lists.map(list => (
                        <li value={planText} onChange={handlePlanChange} key={list.plan}>
                            <Stack direction="horizontal" gap={3}>
                                <textarea ref={inputRef} type="text" className="me-auto" placeholder="Add your plan here..." />
                                <div style={{ width: "140px" }}>
                                    <WorkTime />
                                </div>
                                <div className="vr" />
                                <Button variant="outline-light" onClick={() => handleRemove(list.plan)}>✖</Button>
                            </Stack>
                        </li>
                    ))
                } */}
                {/* {renderPlan ? console.log("Submitted") : null } */}
            </ul>
            <Button variant="outline-light" onClick={handleAddPlan}> Add a Plan </Button>
            <div className="vr" />
            <Button onClick={submit} type="submit" variant="outline-light" > Submit </Button>
        </div>
    )

}

export default UserPlan
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function RadioButtons() {
    const [option, setOption] = useState();
    // const [value, setValue] = useState("")

    function handleChange(e) {
        setOption(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log({option})
    }
    
    return (
        <div className="App">
            <center>
            <br/><br/>
            <input type="radio" name="option" value="yes" onChange={handleChange}/>Yes
            <br/><br/>
            <input type="radio" name="option" value="no" onChange={handleChange}/>No
            <h1>{option}</h1>

            <Form onSubmit={handleSubmit}>
            <Button onClick={handleSubmit} >see effect</Button>
            </Form>
            </center>
        </div>
    )
}

export default RadioButtons;
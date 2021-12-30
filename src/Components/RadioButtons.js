import React, { useState } from 'react';

function RadioButtons() {
    const [option, setOption] = useState("");

    function handleChange(e) {
        setOption(e.target.value);
    }
    return (
        <div className="App">
            <center>
            <br/><br/>
            <input type="radio" name="option" value="yes" onChange={handleChange}/>Yes
            <br/><br/>
            <input type="radio" name="option" value="no" onChange={handleChange}/>No
            <h1>{option}</h1>

            <Button>see effect</Button>
            </center>
        </div>
    )
}

export default RadioButtons;
// import { Button } from 'react-bootstrap';
import React, {useState} from 'react';
import TimePicker from 'react-bootstrap-time-picker';

function WorkTime() {
    
    
    const[planTime, setPlanTime]= useState({time: 0})
    const handleTime = (e) => {
        console.log(e)
        setPlanTime({time: e})
    } 
    
     return <TimePicker onChange={(e) => handleTime(e)} format={24} 
     initialValue={planTime.time} start="00:00" end="23:59" step={30} />
     




    // const[planTimeee, setPlanTimeee]= useState({
    //     name: "MEC",
    //     age: 5
    // })

    // const activateLasers = ()=>{
    //     console.log("btn worked")
    //     setPlanTimeee({name:"MECCCCC"})
    // }
    //  <Button onClick={() => activateLasers()}>{planTimeee.name}</Button>
 
    
    }

export default WorkTime;

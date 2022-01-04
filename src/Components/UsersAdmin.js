import React from "react";
// import RadioButtons from './RadioButtons'
// import UsersList from './users';
import { Container, Row, Col } from 'react-bootstrap';
import totalHours from './TotalReportsHM';
import DateRangePicker from './DateRangePicker';
import Canvas from './Canvas'


function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    // let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    // if (seconds < 10) {seconds = "0"+seconds;}
    return `${hours}:${minutes}` 
}
var result = totalHours.reduce(function (acc, obj) { return acc + obj.time; }, 0);
console.log(result);  // 7

        // console.log(newtotal)
function UsersAdmin() {
    return (
        <div>
            {/* <Navbar/> */}
            {/* <SignIn/> */}
                {/* <center><h3>user's name</h3><br /></center> */}
            <center>
                <br />

                <Container>
                    <Row>
                        <Col>


                            {/* {plans} */}
                            {/* <WorkTime time={19800} /> */}

                            {/* <br /><br /> */}
                            <div><Canvas/></div>
                            {/* <br /><br /> */}
                            <div className="col-md-3">datePicker:<br/><br/>
                            <DateRangePicker/> </div>
                            <div>total hours: {convertHMS(result)}</div>
                            {/* <RadioButtons /> */}
                        </Col>
                    </Row>
                </Container>


            </center>
        </div>
    );
}



export default UsersAdmin;
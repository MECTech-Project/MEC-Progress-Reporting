import React from "react";
import DateRangePicker from './DateRangePicker';
// import UsersList from './users';
import { Container, Row, Col } from 'react-bootstrap';
// import totalHours from "./TotalReportsHM";
// import { ListGroup } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import Calendar from "./Calendar";
// import plansData from "./Plans";


// import TimePicker from 'react-bootstrap-time-picker';

// function convertHMS(value) {
//     const sec = parseInt(value, 10); // convert value to number if it's string
//     let hours   = Math.floor(sec / 3600); // get hours
//     let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
//     // let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
//     // add 0 if value < 10; Example: 2 => 02
//     if (hours   < 10) {hours   = "0"+hours;}
//     if (minutes < 10) {minutes = "0"+minutes;}
//     // if (seconds < 10) {seconds = "0"+seconds;}
//     return `${hours}:${minutes}` 
// }
// var result = totalHours.reduce(function (acc, obj) { return acc + obj.time; }, 0);
// console.log(result);  // 7

// console.log(newtotal)
function UsersAdmin() {


    // let plans = plansData.map((plan) => {

    //     return (
    //         // console.log(plan)
    //         <Card className="text-center col-md-7">
    //         <ListGroup.Item variant="primary">Date of : (date)</ListGroup.Item>
    //         <ListGroup.Item variant="dark"><h4>{plan.task}</h4><center>{plan.plan}</center>
    //             <div class="form-check">
    //                 <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled />
    //                 <label class="form-check-label" for="flexRadioDisabled">
    //                     Yes
    //                 </label>
    //             </div>
    //             <div class="form-check">
    //                 <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled />
    //                 <label class="form-check-label" for="flexRadioCheckedDisabled">
    //                     No
    //                 </label>
    //             </div>
    //         </ListGroup.Item>
    //         <Card.Body>
    //             <Card.Text>
    //             {plan.report}.
    //             </Card.Text>
    //         </Card.Body>
    //         <ListGroup.Item variant="dark"><center>{plan.plan}</center></ListGroup.Item>
    //         <Card.Body>
    //             <Card.Text>
    //                 {plan.report}.
    //             </Card.Text>
    //         </Card.Body>
    //         <ListGroup.Item variant="dark"><center>{plan.plan}</center></ListGroup.Item>
    //         <Card.Body>
    //             <Card.Text>
    //                 {plan.report}.
    //             </Card.Text>
    //         </Card.Body>
    //     </Card>
    //       );
    // });


    return (
        <div>
                {/* <center><h3>user's name</h3><br /></center> */}
                {/* <Calendar /> */}
            <center>
                <br />

                <Container>
                    <Row>
                        <Col>


                            {/* {plans} */}
                            {/* <WorkTime time={19800} /> */}

                            {/* <br /><br /> */}
                            {/* <div>total hours: {convertHMS(result)}</div> */}
                            <br /><br />
                            <div className="col-md-3">datePicker:<br/><br/><DateRangePicker/> </div>

                        </Col>
                    </Row>
                </Container>


            </center>
        </div>
    );
}



export default UsersAdmin;
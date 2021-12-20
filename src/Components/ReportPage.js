import React, { useState } from 'react'
import { Card, Nav, Button, Col, Row } from 'react-bootstrap';
import "../App.css"
import WorkTime from "./WorkTime";




// This is the arrray of the first function where the plans are already filled 

const initialReports = [
    {
        id: "1",
        name: "george 1",
        time: 3600

    },
    {
        id: "2",
        name: "george 2",
        time: 3600

    },
    {
        id: "3",
        name: "george 3",
        time: 7200
    }
];
// The first array ends here


// This is the array of the second function where the user need to input a plan and a report
const newReport = [];
// The second array ends


// This is the function that will produce the new report that needs to be filled with a plan and report
function ReportPage() {

    const [addedPlan, setaddedPlan] = useState(newReport)
    function handleNewPlan() {
        setaddedPlan([...addedPlan, {
            id: addedPlan.length + 1,
            


        }])
    }
    function handleRemoveReports(id) {
        // console.log("hhh")
        setaddedPlan(addedPlan.filter(repo => repo.id !== id))

    }
    
        let plans = addedPlan.map((user) => {
        console.log(user)
        //This is the return for the second part where the user needs to input his new plan a the report with it aswell
        return (
            <div>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6} lg={6} >
                        <Card>
                        <Card.Header>
                        <Card.Title>Did you complete your plans ?</Card.Title>
                        <Nav variant="pills" defaultActiveKey="#first">
                                    
                                    <div className='buttons'>
                                        <Button variant="primary" onClick={() => console.log("Clicked Yes")}>Yes</Button>
                                        <Button className="no" variant="danger" onClick={() => console.log("Clicked No")} >No</Button>
                                    </div>
                        </Nav>

                        </Card.Header>
                            <textarea className="p" type="text" placeholder="Type in the new plan please" />
                            <Card.Body>
                                <textarea type="text" placeholder="Please type your report here" />
                                <Button variant="danger" className="remove" onClick={() => handleRemoveReports(user.id)}>✖</Button>
                                
                                <div style={{ width: '80px' }}>
                                    <WorkTime time={user.time} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );

        });

    const [reports, setReports] = useState(initialReports)

    function handleAddReports() {
        setReports([...reports, {
            id: reports.length + 1,
            name: `george ${reports.length + 1}`,
            time: 3600
            
        }])
    }
    // function handleRemoveReports(id) {
    //     // console.log("hhh")
    //     setReports(reports.filter(repo => repo.id !== id))

    // }

    let users = reports.map((user) => {
        console.log(user)
        // This return is for the map of the already saved plans where the user only adds what he did without a plan
        return (

            <div>



                <Row className="justify-content-md-center">
                    <Col xs={6} md={6} lg={6} >
                        <Card >

                            <Card.Header>
                                <Nav variant="pills" defaultActiveKey="#first">
                                    <Card.Title>{user.name}</Card.Title>
                                    <div className='buttons'>
                                        <Button variant="primary" onClick={() => console.log("Clicked Yes")}>Yes</Button>
                                        <Button className="no" variant="danger" onClick={() => console.log("Clicked No")} >No</Button>
                                    </div>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <textarea className="area" type="text" id="inputreport" placeholder="Type in what you did here" />

                                {/* <Button variant="danger" className="remove" onClick={() => handleRemoveReports(user.id)}>✖</Button> */}
                                

                                <div style={{ width: '80px' }}>
                                    <WorkTime time={user.time} />
                                </div>

                            </Card.Body>

                        </Card>

                        <hr className="line"/>
                        {/* <div>{user.name}</div>
               <div>{user.id}</div> */}
                    </Col>
                </Row>
            </div>
        );
    });

    //This return is for the main function that only asks the user to add a report for the plan he already filled in the plan page
    return (

        <div>
            <div><h2 className="text-center pb-4">Report Page</h2></div>
            <Card.Title className="text-center pb-4">Did you work on what was planned ?</Card.Title>
            {
                users
            }
            {plans}
            

            <Row className="justify-content-md-center">
                <Col xs={6} md={6} lg={6} >
                    <Button onClick={handleNewPlan}>Add New Report</Button>
                    <Button className="subbutton" variant="primary" type="submit" >
                    Submit
                </Button></Col></Row>
                    

        </div>

    
    )
}

export default ReportPage

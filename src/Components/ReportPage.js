import React, { useState } from 'react'
import { Card, Nav, Button, Col,Row } from 'react-bootstrap';
import "../App.css"
import WorkTime from "./WorkTime";





const initialReports = [
    {   name:"george",
        id: "1",
        time: 3600
    
    },
    {   name:"george1",
        id: "2",
        time: 3600

    },
    {   name:"george2",
        id: "3",
        time: 7200
    }
];

//new map is placed over here 
// function ReportPages(){
// const [things, setThings] = useState (initialReports);
// const [open, setOpen] = React.useState(false);
// const[desc,setDesc]
//}

//map will end here
        
const plannumber=[
    {pnumber: 1},
    {pnumber: 2},
    {pnumber: 3},
]



function ReportPage() {

    const [reports, setReports] = useState(initialReports)

    function handleAddReports() {
        setReports([...reports, {
            reports: reports.name =+1

        }])
    }
    function handleRemoveReports(id) {
        // console.log("hhh")
        setReports(reports.filter(repo => repo.id !== id ))

    }

    let users = reports.map((user) => {
        console.log(user)

        

        return (
            
            <div>
            
            
            
                <Row className="justify-content-md-center">
                <Col xs={6} md={6} lg={6} >
                   <Card >
                   
                        <Card.Header>
                            <Nav variant="pills" defaultActiveKey="#first">
                                <Card.Title>{user.name}</Card.Title>
                                <div className='buttons'>
                                    <Button variant="primary" onClick={()=> console.log("Clicked Yes")}>Yes</Button>
                                    <Button className="no" variant="primary" onClick={()=> console.log("Clicked No")} >No</Button>
                                </div>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                        <textarea className="area" type="text" id="inputreport" placeholder="Type in what you did here" />

                            <Button variant="danger" className="remove" onClick={() => handleRemoveReports(user.id)}>✖</Button>
                            {/* <Card.Text>
                                With supporting text below as a natural lead-in to additional content.

                                     <div style={{width:'80px'}}>
                                    <WorkTime />
                                </div>
                                

                                        </Card.Text> */}
                                        <div style={{width:'80px'}}>
                                                <WorkTime time={user.time} />
                                            </div>

                                    </Card.Body>
                                    
                                </Card>
                                
                                
                 <div>{user.name}</div>
               <div>{user.id}</div>
               </Col>
                </Row>
            </div>
          );
    });
    return (
        
        <div>
        <div><h2 className="text-center pb-4">Report Page</h2></div>
        <Card.Title className="text-center pb-4">Did you work on what was planned ?</Card.Title>
        {
            users
        }
        
        <Row className="justify-content-md-center">
        <Col xs={6} md={6} lg={6} > 
        <Button onClick={handleAddReports}>Add New Report</Button></Col></Row>
        
        </div>

        // <div className="reportplans">
        //     <h2 className="text-center pb-4">Report Page</h2>

        //     <Container>

        //         <Col xs={6} md={6} lg={6} >
        //             <Card.Title>Did you work on what was planned ?</Card.Title>
        //             <br></br>
                    
        //                 {reports.map(repo => (
                            
        //                         <Card >
        //                             <Card.Header>
        //                                 <Nav variant="pills" defaultActiveKey="#first">
        //                                     <Card.Title>{users}</Card.Title>
        //                                     <div className='buttons'>
        //                                         <Button variant="primary">Yes</Button>
        //                                         <Button className="no" variant="primary">No</Button>
        //                                     </div>
        //                                 </Nav>
        //                             </Card.Header>
        //                             <Card.Body>
        //                                 <Card.Title>Please fill in the report for the plan</Card.Title>
        //                                 <Button variant="danger" className="remove" onClick={() => handleRemoveReports(repo.id)}>✖</Button>
        //                                 <Card.Text>
        //                                     With supporting text below as a natural lead-in to additional content.

        //                                      {/* <div style={{width:'80px'}}>
        //                                         <WorkTime />
        //                                     </div>
        //                                     */}

        //                                 </Card.Text>
        //                                 <div style={{width:'80px'}}>
        //                                         <WorkTime />
        //                                     </div>

        //                             </Card.Body>
        //                         </Card>
                            
        //                 ))}
                    
        //         </Col>

        //     </Container>
        //     <Button className="bn" onClick={handleAddReports}>Add New Report</Button>


        // </div>
    )
}

export default ReportPage

import React from 'react'
import{Card, Nav, Button,Container,Col} from 'react-bootstrap';
import "../App.css"
import WorkTime from "./WorkTime"
function ReportPage() {
    return (
        <div className="plancards">
        <Container>
        <Col  xs={6} md={6} lg={6} >
        <Card.Title>Did the plan go as planned ?</Card.Title>
        <br></br>

        {/*First Card*/}
        <Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
    <Card.Title>Plan 1</Card.Title>
    <div className='buttons'>
    <Button  variant="primary">Yes</Button>
    <Button className ="no" variant="primary">No</Button>
    </div>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Please fill in the report for the plan</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      <WorkTime />
     
    </Card.Text>
    
  </Card.Body>
</Card>
<br></br>

{/*Second Card*/}
<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
    <Card.Title>Plan 2</Card.Title>
    <div className='buttons'>
    <Button variant="primary">Yes</Button>
    <Button className ="no" variant="primary">No</Button>
    </div>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Please fill in the report for the plans</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      <WorkTime />
    </Card.Text>
    
  </Card.Body>
</Card>
<br></br>

{/*Third Card*/}
<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
    <Card.Title>Plan 3</Card.Title>
    <div className='buttons'>
    <Button variant="primary">Yes</Button>
    <Button className ="no" variant="primary">No</Button>
    </div>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Please fill in the report for the plan</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      <WorkTime />
    </Card.Text>
  
  </Card.Body>
</Card>
<br></br>

{/*Fourth Card*/}
<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
    <Card.Title>Plan 4</Card.Title>
    <div className='buttons'>
    <Button variant="primary">Yes</Button>
    <Button className ="no" variant="primary">No</Button>
    </div>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Please fill in the report for the plan</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      <WorkTime />
    </Card.Text>
 
  </Card.Body>
</Card>
</Col>
</Container>


            
        </div>
    )
}

export default ReportPage

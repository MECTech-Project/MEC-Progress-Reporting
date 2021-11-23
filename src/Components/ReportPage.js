import React from 'react'
import{Card, Nav, Button,Container,Col} from 'react-bootstrap';

function ReportPage() {
    return (
        <div>
        <Container>
        <Col  xs={6} md={6} lg={6} >
        <Card>
  <Card.Header>
  
    <Nav variant="pills" defaultActiveKey="#first">
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
    </Card.Text>
    
  </Card.Body>
</Card>
<br></br>

<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
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
    </Card.Text>
    
  </Card.Body>
</Card>
<br></br>

<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
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
    </Card.Text>
  
  </Card.Body>
</Card>
<br></br>

<Card>
  <Card.Header>
    <Nav variant="pills" defaultActiveKey="#first">
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
    </Card.Text>
 
  </Card.Body>
</Card>
</Col>
</Container>


            
        </div>
    )
}

export default ReportPage

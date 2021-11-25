import React from 'react';
import {Form, Button, Row, Col, Card, Container} from 'react-bootstrap';

function AddUser() {
    return (
    
    <div>
    <Container>
  <Row className="justify-content-md-center">
    <Col  xs={6} md={6} lg={6} >
    <Card body>
        <Form>
    <Form.Group className="formf" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
    </Form>
    </Card>
    </Col>
  </Row>
</Container>
   
</div>      
    )
}

export default AddUser

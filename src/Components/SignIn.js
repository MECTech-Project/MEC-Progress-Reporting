import React from 'react';
import {Form, Button, Row, Col, Card, Container} from 'react-bootstrap';

function SignIn() {
    return (
    
    <div>
    <Container >
        <h2 className="text-center">Sign In</h2>
  <Row className="justify-content-md-center">
    <Col  xs={8} md={10} lg={10} >
    <Card body>
        <Form>
    <Form.Group className="formf" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" />
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
        Sign In
    </Button>
    </Form>
    </Card>
    </Col>
  </Row>
</Container>
   
</div>      
    )
}

export default SignIn

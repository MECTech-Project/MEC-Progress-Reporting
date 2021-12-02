import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

function handleClick(){
    alert("Change Successful!")
  }

function Editaccount() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col  xs={6} md={6} lg={6} >
                        <Card body>
                            <Form>
                                <h4>Edit Account</h4>
                                    <Form.Group className="formf" controlId="formGroupEmail">
                                        <Form.Label>TreeHouse</Form.Label>
                                        <Form.Control placeholder="Enter profile URL" />
                                    </Form.Group>
                                    <Form.Group className="formf" controlId="formGroupEmail">
                                        <Form.Label>GitHub profile</Form.Label>
                                        <Form.Control type="email" placeholder="github.com/username" />
                                    </Form.Group>
                                    <Form.Group className="formf" controlId="formGroupEmail">
                                        <Form.Label>freeCodeCamp</Form.Label>
                                        <Form.Control placeholder="freecodecamp.org/username" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="formGroupEmail">
                                        <Form.Label>LinkedIn</Form.Label>
                                        <Form.Control type="email" placeholder="linkedin.com/in/username" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" onClick={handleClick}>
                                        Save changes
                                    </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        <br/>
        </div>   
   );
}

export default Editaccount;
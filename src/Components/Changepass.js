import React from 'react';
import { Container, Card, Form, Button, Row, Col,} from 'react-bootstrap';

function handleClick(){
        alert("Password Changed!")
    }
    
function Changepass() {
    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col  xs={6} md={6} lg={6} >
                        <Card body>
                            <Form>
                                <h4>Change Password</h4>
                                <Form.Group className="formf" controlId="formGroupPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="formf" controlId="formGroupPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formGroupPassword">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"/>
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

export default Changepass;
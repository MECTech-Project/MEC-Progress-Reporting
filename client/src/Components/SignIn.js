import React from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';

function SignIn() {

    const handleSignIn = () => {
        console.log("Sign In")
    }

    return (

        <div>
            <Container >
                <h2 className="text-center">Log In</h2>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6} lg={6} >
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
                              
                            </Form>
                                <Button onClick={handleSignIn} variant="primary" type="submit">
                                    Log In
                                </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default SignIn

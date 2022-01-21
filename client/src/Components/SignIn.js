import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
// import Axios from "axios";

function SignIn() {

    // incomplete
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // incomplete
    // const signIn = () => {
    //     Axios.post("http://localhost:3001/api/login", {
    //         email,
    //         password,
    //     })
    // };

    return (
        <div>
            <Container >
                <h2 className="text-center">Log In</h2>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6} lg={6} >
                        <Card body>
                            <Form>
                                <Form.Group className="mb-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your email"
                                        // onChange={(event) => {
                                        //     setEmail(event.target.value)
                                        // }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        // onChange={(event) => {
                                        //     setPassword(event.target.value)
                                        // }}
                                    />
                                </Form.Group>

                                <Button
                                    // onClick={signIn}
                                    variant="primary"
                                    type="submit"
                                >
                                    Log In
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

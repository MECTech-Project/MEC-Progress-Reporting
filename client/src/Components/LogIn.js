import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
// import Axios from "axios";

function LogIn() {

    // incomplete
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()
        // Axios.post('http://localhost:3001/api/login', {
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })

        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('Login successful')
            // if (user.userType === admin) {
            window.location.href = '/admin'
            // } else if (user.userType === intern) {
            //     window.location.href = '/user'
            // } else {
            //     alert('No content to show for this user')
            // }
        } else {
            alert('Please check your username and password')
        }
    }


    // incomplete
    // const logIn = () => {
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
                            <Form onSubmit={loginUser}>
                                <Form.Group className="mb-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button
                                    // onClick={logIn}
                                    variant="primary"
                                    type="submit"
                                    value="Login"
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

export default LogIn

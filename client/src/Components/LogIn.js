import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';

import Axios from "axios";

// import { LoginContext, setLoggedIn } from '../Helper/Context';

function LogIn() {

    // const { loggedIn, setLoggedIn } = useContext(LoginContext);
    // const { userType, setUserType } = useContext(UserTypeContext);

    const [listOfUsers, setListOfUsers] = useState([]);

    const [firstName, setFirstName] = useState("");
    const [userType, setuserType] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        Axios.get("http://localhost:5000/getUsers").then((response) => {
            setListOfUsers(response.data);
        });
    }, []);

    async function loginUser(event) {
        event.preventDefault()
        // Axios.post('http://localhost:5000/api/login', {
        const response = await fetch('http://localhost:5000/api/login', {
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
            alert(data.user)
            if (userType === "admin") {
                window.location.href = '/admin'
            } else if (userType === "intern") {
                window.location.href = '/user'
            } else {
                alert('No content to show for this user')
            }
        } else {
            alert('Please check your username and password')
        }
    }


    // incomplete
    // const logIn = () => {
    //     Axios.post("http://localhost:5000/api/login", {
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

            {/* <button onClick={() => setLoggedIn(true)}> click here</button>
            {loggedIn ? <h1> ON </h1> : <h1> OFF </h1>} */}

        </div>
    )
}

export default LogIn

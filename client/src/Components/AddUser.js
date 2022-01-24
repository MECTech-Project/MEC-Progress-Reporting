import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import Axios from "axios";

function AddUser() {

    // temporary
    const [userId, setUserId] = useState("");

    const [userType, setUserType,] = useState("");

    const [listOfUsers, setListOfUsers] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        Axios.post("http://localhost:3001/createUser", {
            userId,
            userType,
            firstName,
            lastName,
            email,
            password,
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
                    userId,
                    userType,
                    firstName,
                    lastName,
                    email,
                    password,
                },
            ]);
        });
    };


    return (
        <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6} lg={6} >
                        <Card body>
                            <Form>
                                <Form.Control className="mb-2"
                                    type="text"
                                    placeholder="userId"
                                    onChange={(event) => {
                                        setUserId(event.target.value);
                                    }}
                                />
                                <Form.Group className="mb-2">
                                    <Form.Label>Select user type</Form.Label>
                                    {" "}
                                    <select
                                        required={true}
                                        onChange={(event) => {
                                            setUserType(event.target.value);
                                        }}
                                    >
                                        <option></option>
                                        <option value="intern">intern</option>
                                        <option value="admin">admin</option>
                                    </select>
                                </Form.Group>

                                <Form.Group className="mb-2">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control className="mb-2"
                                        type="text"
                                        placeholder="First Name"
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }}
                                    />
                                    <Form.Control className="mb-2"
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={(event) => {
                                            setLastName(event.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-2">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@email.com"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-2">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="first name + 123"
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={createUser}
                                >
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

import React, { useState } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import Axios from "axios";

function AddUser() {

    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        Axios.post("http://localhost:5000/createUser", {
            name,
            email,
            password,
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
                    name,
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Full Name"
                                        onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Email Address"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="name123"
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
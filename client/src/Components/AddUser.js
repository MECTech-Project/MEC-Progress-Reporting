import React, { useState, useContext } from 'react';
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap';
import Axios from "axios";

// import { LoginContext, UserTypeContext } from '../Helper/Context';

function AddUser() {

    // const { loggedIn, setLoggedIn } = useContext(LoginContext);
    // const { userType, setUserType } = useContext(UserTypeContext);

    const [listOfUsers, setListOfUsers] = useState([]);
    const [userType, setUserType,] = useState("intern");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = () => {
        Axios.post("http://localhost:5000/createUser", {
            userType,
            firstName,
            lastName,
            email,
            password,
        }).then((response) => {
            setListOfUsers([
                ...listOfUsers,
                {
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

            {/* <button onClick={() => setLoggedIn(true)}> click here</button>
            {loggedIn ? <h1> ON </h1> : <h1> OFF </h1>} */}

        </div>
    )
}

export default AddUser

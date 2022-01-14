import React, { useState } from 'react';
import {Form, Button, Row, Col, Card, Container} from 'react-bootstrap';
import Axios from 'axios';


function AddUser() {
    // const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // useEffect(() => {
    //     // Axios.get("http://localhost:5000/getUsers").then((response) => {
    //     //     setListOfUsers(response.data);
    //     // });
    // }, []);


    const createUser = () => {
        Axios.post("http://localhost:5000/createUser", {
            name,
            email,
            password,
        }).then((response) => {
            alert("USER HAS BEEN CREATED");
        });
    };
    


    return (
    <div>
    <Container>
  <Row className="justify-content-md-center">
    <Col  xs={6} md={6} lg={6} >
    <Card body>
        <Form>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="username" placeholder="Enter Name" onChange={(e) => {
            setName(e.target.value);
        }} />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => {
            setPassword(e.target.value);
        }}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
    </Form.Group>
    <Button variant="primary" onClick={createUser}>
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

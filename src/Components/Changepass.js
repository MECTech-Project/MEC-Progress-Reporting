import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

function Changepass() {
    return (
        <div>      

        <br/>

        <Container>
            <Card body>
            <Form>
                <h2>Change Password</h2>
                <br/>
               <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save changes
                </Button>
            </Form>
            </Card>
        </Container>   

        <br/>
            
        </div>
    );
}

export default Changepass;
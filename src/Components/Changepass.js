import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function Changepass() {
    return (
            <div>   
            <br/>
            <hr/>

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
            
            </div>

    );

}

export default Changepass;
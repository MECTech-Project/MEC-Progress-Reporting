import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

function Editaccount() {
    return (
        <div>   

        <br/>

        <Container>
            <Card body>
            <Form>
            <h2>Edit Account</h2>
            <br/>
 
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>TreeHouse</Form.Label>
                <Form.Control placeholder="Enter profile URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>GitHub profile</Form.Label>
                <Form.Control type="email" placeholder="github.com/username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>freeCodeCamp</Form.Label>
                <Form.Control placeholder="freecodecamp.org/username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="email" placeholder="linkedin.com/in/username" />
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

export default Editaccount;
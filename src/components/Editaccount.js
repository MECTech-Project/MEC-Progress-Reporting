import React from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';


function Editaccount() {
    return (

      <div>   
      <br/>
      <hr/>

            <Card body>
            <Form>
            <h2>Edit Account</h2>
            <br/>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>TreeHouse</Form.Label>
                <Form.Control placeholder="Enter profile URL" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                <Form.Label>GitHub profile</Form.Label>
                <Form.Control type="email" placeholder="github.com/username" />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>freeCodeCamp</Form.Label>
                <Form.Control placeholder="freecodecamp.org/username" />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGroupEmail">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control type="email" placeholder="linkedin.com/in/username" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Save changes
            </Button>
            </Form>
            </Card>
            
        </div>
   
   );

}

export default Editaccount;
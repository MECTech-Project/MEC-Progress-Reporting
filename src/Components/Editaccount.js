import React from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

function Editaccount() {

    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div>
        <Container>
            <Row className="justify-content-md-center">
            <Col  xs={6} md={6} lg={6} >
                <Card body>
                <Col md={{ span: 9, offset: 1 }}>
                    <Form>
                        <h4><strong>Edit Account</strong></h4>
                        <Form.Group className="mb-2">
                            <Form.Label>TreeHouse</Form.Label>
                            <Form.Control 
                                {...register("treeHouse")} 
                                placeholder="Enter profile URL" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>GitHub profile</Form.Label>
                            <Form.Control 
                                {...register("gitHub")}
                                placeholder="github.com/username"
                            />
                        </Form.Group>
                        <Form.Group className="mb-2">
                            <Form.Label>freeCodeCamp</Form.Label>
                            <Form.Control
                                {...register("freeCodeCamp")}
                                placeholder="freecodecamp.org/username"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control
                                {...register("linkedIn")}
                                placeholder="linkedin.com/in/username"
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit(onSubmit)} >
                            Save changes
                        </Button>
                    </Form>
                </Col>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>   
   );
}
export default Editaccount;
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
                        <Row>
                        <Col md={{ span: 11, offset: 1 }}>
                            <h4><strong>Edit Account</strong></h4>

                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label htmlFor="treeHouse">
                                        TreeHouse
                                    </Form.Label>
                                    <Row>
                                        <Col sm="9" >
                                            <Form.Control
                                                {...register("treeHouse")}
                                                placeholder="Enter profile URL" />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={handleSubmit(onSubmit)} >
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>
                            

                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label htmlFor="gitHub">
                                        GitHub profile
                                    </Form.Label>
                                    <Row>
                                        <Col sm="9" >
                                            <Form.Control
                                                {...register("gitHub")}
                                                placeholder="github.com/username" />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={handleSubmit(onSubmit)} >
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>


                            <Form>
                                <Form.Group className="mb-1">
                                    <Form.Label htmlFor="freeCodeCamp">
                                        freeCodeCamp
                                    </Form.Label>
                                    <Row>
                                        <Col sm="9" >
                                            <Form.Control
                                                {...register("freeCodeCamp")}
                                                placeholder="freecodecamp.org/username" />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={handleSubmit(onSubmit)} >
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>


                            <Form>
                                <Form.Group className="formf">
                                    <Form.Label htmlFor="linkedIn">
                                        LinkedIn
                                    </Form.Label>
                                    <Row>
                                        <Col sm="9" >
                                            <Form.Control
                                                {...register("linkedIn")}
                                                placeholder="linkedin.com/in/username" />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={handleSubmit(onSubmit)} >
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form.Group>
                            </Form>

                        </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
        <br/>
        </div>   
    );
}
export default Editaccount;
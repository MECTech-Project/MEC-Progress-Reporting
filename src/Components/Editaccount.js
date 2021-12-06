import React, {Component} from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

class Editaccount extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
      }

    render() {
        return (
            <div>
            <Container>
                <Row className="justify-content-md-center">
                    <Col  xs={6} md={6} lg={6} >
                        <Card body>
                            <Row>
                            <Col md={{ span: 11, offset: 1 }}>
                                <h4><strong>Edit Account</strong></h4>

                                <Form className="mb-1" onSubmit={this.handleSubmit} >
                                    <Form.Label>TreeHouse</Form.Label>
                                    <Row>
                                        <Col sm="9">
                                            <Form.Control type="url" placeholder="Enter profile URL"
                                            value={this.state.value1} onChange={this.handleChange} />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                                
                                <Form className="mb-1" onSubmit={this.handleSubmit} >
                                    <Form.Label>GitHub profile</Form.Label>
                                    <Row>
                                        <Col sm="9">
                                            <Form.Control type="url" placeholder="github.com/username"
                                            value={this.state.value2} onChange={this.handleChange} /> 
                                        </Col>
                                        <Col>
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>

                                <Form className="mb-1" onSubmit={this.handleSubmit} >
                                    <Form.Label>freeCodeCamp</Form.Label>
                                    <Row>
                                        <Col sm="9">
                                            <Form.Control type="url" placeholder="freecodecamp.org/username"
                                            value={this.state.value3} onChange={this.handleChange} />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>

                                <Form className="formf" onSubmit={this.handleSubmit} >
                                    <Form.Label>LinkedIn</Form.Label>
                                    <Row>
                                        <Col sm="9">
                                            <Form.Control type="url" placeholder="linkedin.com/in/username"
                                            value={this.state.value4} onChange={this.handleChange} />
                                        </Col>
                                        <Col>
                                            <Button variant="primary" type="submit">
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
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
}
export default Editaccount;
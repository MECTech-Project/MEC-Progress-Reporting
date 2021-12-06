import React, {Component} from 'react';
import { Container, Card, Form, Button, Row, Col} from 'react-bootstrap';

class Changepass extends Component {

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
                            <Form onSubmit={this.handleSubmit} >
                            <h4><strong>Change Password</strong></h4>
                            <Form.Group className="mb-2" >
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                    value={this.state.value1} onChange={this.handleChange} />
                            </Form.Group>
                            {/* <Form.Group className="mb-2" controlId="formGroupPassword">
                                <Form.Label>Confirm New Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                                Save changes
                            </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>   
            <br/>
            </div>
        );
    }
}

export default Changepass;
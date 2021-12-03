import React from "react";
import { Form, Container, Row, Col } from 'react-bootstrap';

function Calendar() {
    return (
        <Container>
            <Row>
                <Col>
                    <h4>Plans & Reports</h4>

                    <center>
                        <div className="col-md-3">
                            <Form.Group controlId="dob">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                            </Form.Group>
                        </div></center>
                    <div className="col-md-3">
                        <Form.Group controlId="dob">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default Calendar;
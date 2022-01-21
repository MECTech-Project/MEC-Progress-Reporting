import React, { useRef } from "react";
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

function Changepass() {

  const { register, formState: { errors }, watch, handleSubmit } = useForm({
    criteriaMode: "all",
    mode: "onChange"
  });

  const new_password = useRef({});
  new_password.current = watch("new_password", "");

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} md={6} lg={6} >
            <Card body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <h4><strong>Change Password</strong></h4>

                <Form.Group className="mb-2">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // error condition
                    {...register("current_password", {
                      required: true,
                    })}
                  />
                  {/* error result */}
                  {errors?.current_password?.types?.required
                    && <p className="text-danger"> &#9888; required</p>
                  }
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // error conditions
                    {...register("new_password", {
                      required: true,
                      minLength: 5
                    })}
                  />
                  {/* error results */}
                  {errors?.new_password?.types?.required
                    && <p className="text-danger"> &#9888; required</p>
                  }
                  {errors?.new_password?.types?.minLength
                    && <p className="text-danger"> &#9888; must have at least 5 characters</p>
                  }
                </Form.Group>

                <Form.Group className="mb-2">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    // error condition
                    {...register("confirm_password", {
                      validate: value =>
                        value === new_password.current
                    })}
                  />
                  {/* error result */}
                  {errors?.confirm_password?.types?.validate
                    && <p className="text-danger"> &#9888; passwords do not match</p>
                  }
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                >  Save changes
                </Button>

              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}
export default Changepass;
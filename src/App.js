import React, { useState, useEffect } from "react"; //useEffect, useRef
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });
  const [formerrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && isSubmitting) {
      //complete submission
      console.log("Form data is ok so complete submission");
    }
  }, [formerrors, isSubmitting]);

  //this method handles the each form field changing and updates the relevant
  //state value for that input
  const handleChange = (event) => {
    // event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  //this method will check each field in your form. You define
  //the rules for each field
  const validate = () => {
    console.log("Validate the form....");

    let errors = {};

    //name field
    if (!values.fullname) {
      errors.fullname = "Full name is required";
    }

    //email field
    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log("Submitting the form ->");
    setIsSubmitting(true);
    setFormErrors(validate(values));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Bootstrap <code>Form Example</code>.
        </p>
      </header>
      <Container className="p-3">
        <Container>
          <Row>
            <Col>
              <Alert show={showMessage} variant="success">
                <Alert.Heading>Success</Alert.Heading>
                <p>
                  This is an alert, and these can be shown in a variety of
                  styles provided by Bootstrap. Our form submit button simply
                  shows this alert. Another post will go through form validation
                  and errors.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button
                    onClick={() => setShowMessage(false)}
                    variant="outline-success"
                  >
                    Close this alert
                  </Button>
                </div>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGridName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Full Name"
                    type="text"
                    name="fullname"
                    value={values.fullname}
                    onChange={handleChange}
                    required
                  />
                  {formerrors.name && (
                    <p className="frmError">{formerrors.name}</p>
                  )}
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Enter email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {formerrors.email && (
                      <p className="text-warning">{formerrors.email}</p>
                    )}
                  </Form.Group>
                </Form.Row>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  //disabled={disable}
                >
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);

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
            <Col>
              <Jumbotron>
                <h1 className="header">Our form</h1>
                <p>
                  We will build a form here. You may want to use this are as
                  login instructions, or some kind of product intro.
                </p>
                <p>
                  This is a h1 tag and paragraph in a Jumbotron, which is the
                  first column in a row of two columns.
                </p>
                <p>
                  Here is a selection of buttons showing some of the different
                  styles available from Bootstrap. You can&nbsp;
                  <a href="https://react-bootstrap.github.io/components/buttons/">
                    read more here
                  </a>
                  .
                </p>
                <hr />
                <Button variant="outline-primary">Primary</Button>{" "}
                <Button variant="outline-secondary">Secondary</Button>{" "}
                <Button variant="outline-success">Success</Button>{" "}
                <Button variant="danger">Danger</Button>{" "}
                <Button variant="info">Info</Button>{" "}
              </Jumbotron>
            </Col>
            <Col>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Street Name" />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Form.Row>
                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setShowMessage(true)}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;

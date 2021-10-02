import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import addImg from "../src/img/add.svg";
import { Heart, CameraFill } from "react-bootstrap-icons";
import { BarChartFill } from "react-bootstrap-icons";

import "./App.css";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    //do stuff here
    setShowMessage("true");
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Bootstrap <code>Button</code> examples.
        </p>
      </header>
      <Container>
        <Row>
          <Col>
            <Alert show={showMessage} variant="success">
              <Alert.Heading>Success</Alert.Heading>
              <p>
                You clicked the camera button! This is an Alert, and these can
                be shown in a variety of styles provided by Bootstrap.
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
          <Col className="text-left">
            <h2>Button Sizes</h2>
            <Stack direction="horizontal" gap={3}>
              <Button size="lg" variant="info">
                Large
              </Button>
              <Button variant="info">Default</Button>{" "}
              <Button size="sm" variant="info">
                Small
              </Button>
            </Stack>

            <h2>Button states</h2>
            <Stack direction="horizontal" gap={3}>
              <Button>Normal button</Button>{" "}
              <Button active>Active button</Button>{" "}
              <Button disabled>Disabled button</Button>
            </Stack>

            <h2>Pre defined button colours & styles</h2>
            <Stack direction="horizontal" gap={3}>
              <Button variant="secondary">Secondary</Button>{" "}
              <Button variant="secondary" disabled>
                Secondary - disabled
              </Button>
              <Button size="sm" variant="warning">
                Warning
              </Button>{" "}
              <Button size="sm" variant="warning" disabled>
                Warning - disabled
              </Button>
              <Button variant="outline-success">Outline success</Button>{" "}
              <Button variant="outline-success" disabled>
                Outline success - disabled
              </Button>{" "}
            </Stack>

            <h2>React bootstrap buttons with icons</h2>
            <Stack direction="horizontal" gap={3}>
              <Button variant="info">
                <img src={addImg} alt="add item" width="30" /> Add item
              </Button>{" "}
              <Button variant="outline-danger">
                <BarChartFill /> Reports
              </Button>
              <Button size="sm" variant="success">
                <Heart /> Like
              </Button>
            </Stack>

            <h2>Add an onClick event to the button</h2>
            {/* //onClick={!isLoading  */}
            <Stack direction="horizontal" gap={3}>
              <Button size="lg" onClick={handleSubmit}>
                Take photo <CameraFill />
              </Button>{" "}
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

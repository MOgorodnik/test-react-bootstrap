import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import Alert from "react-bootstrap/lib/Alert";
import Jumbotron from "react-bootstrap/lib/Jumbotron";
import Button from "react-bootstrap/lib/Button";
// import Container from "react-bootstrap/lib/Container";
import Grid from "react-bootstrap/lib/Grid";
import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

console.log(Alert);

function App() {
  return (
    <Grid>
      <Row className="show-grid">
        <Col xs={12} md={8}>
          <code>{"<Col xs={12} md={8} />"};</code>
        </Col>
        <Col xs={6} md={4}>
          <code>{"<Col xs={6} md={4} />"}</code>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} md={4}>
          <code>{"<Col xs={6} md={4} />"}</code>
        </Col>
        <Col xs={6} md={4}>
          <code>{"<Col xs={6} md={4} />"}</code>
        </Col>
        <Col xsHidden md={4}>
          <code>{"<Col xsHidden md={4} />"}</code>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={6} xsOffset={6}>
          <code>{"<Col xs={6} xsOffset={6} />"}</code>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <code>{"<Col md={6} mdPush={6} />"}</code>
        </Col>
        <Col md={6} mdPull={6}>
          <code>{"<Col md={6} mdPull={6} />"}</code>
        </Col>
      </Row>
      {/* <Container> */}1
      <Alert bsStyle="danger">
        <strong>Holy guacamole!</strong> Best check yo self, you're not looking
        too good.
      </Alert>
      1
      <Jumbotron>
        <h1>Hello, world!1321</h1>
        <Alert>
          <h4>Oh snap! You got an error!</h4>
        </Alert>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button>Learn more</Button>
        </p>
      </Jumbotron>
      {/* </Container> */}
    </Grid>
  );
}

export default App;

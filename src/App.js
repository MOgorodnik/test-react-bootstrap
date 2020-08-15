import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import Alert from "react-bootstrap/Alert";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class AlertDismissable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
          <h4>Oh snap! You got an error!</h4>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
          <p>
            <Button bsStyle="danger">Take this action</Button>
            <span> or </span>
            <Button onClick={this.handleDismiss}>Hide Alert</Button>
          </p>
        </Alert>
      );
    }

    return <Button onClick={this.handleShow}>Show Alert</Button>;
  }
}

// render(<AlertDismissable />);


function App() {
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button>Learn more</Button>
          </p>
          <AlertDismissable />
          {/* <Alert bsstyle="danger">
            <h4>Oh snap! You got an error!</h4>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
              elit. Cras mattis consectetur purus sit amet fermentum.
            </p>
            <p>
              <Button bsstyle="danger">Take this action</Button>
              <span> or </span>
              <Button>Hide Alert</Button>
            </p>
          </Alert> */}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;

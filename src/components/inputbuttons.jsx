import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class InputButtons extends Component {
  state = {};
  render() {
    console.log(this.props.tutorialsList.length - 1)
    return (
      <div className="buttoncontainer">
        {
          (this.props.activeVideoIndex > 0 && this.props.activeVideoIndex < this.props.tutorialsList.length - 1)
            ? <>
              <Button
                variant="dark"
                className="ctabutton floatright"
                onClick={() => this.props.handleNextButton()}
                disabled={this.props.errorcells > 0 ? true : false}
              >
                Next
              </Button>
              <Button
                variant="dark"
                className="ctabutton floatleft"
                onClick={() => this.props.handlePreviousButton()}
              >
                Previous
              </Button>
            </>
            : this.props.activeVideoIndex === 0
              ? <Button
                variant="dark"
                className="ctabutton floatright"
                onClick={() => this.props.handleNextButton()}
                disabled={this.props.errorcells > 0 ? true : false}
              >
                Next
            </Button>
              : <Button
                variant="dark"
                className="ctabutton floatleft"
                onClick={() => this.props.handlePreviousButton()}
              >
                Previous
              </Button>
        }
      </div>
    );
  }
}

export default InputButtons;

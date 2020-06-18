import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class TutorialLinks extends Component {

  render() {
    return (
      <div>
        <Container className="bottommargin">
          <div className="scopesubtitle">{this.props.step}</div>

          <Row key={this.props.step + "row"}>
            {this.props.videoStepObject.map((videoObj) => {

              return (
                <Col
                  sm={12}
                  md={6}
                  lg={3}
                  key={videoObj.url}
                  className={"scopeitem paddingtwenty "}
                  onClick={() =>
                    this.props.handleClickScope(videoObj.videoIndex)
                  }
                >
                  <Link to="/tutorial-page">
                    <div
                      className={"link"}
                    >
                      <Col xs={2} className="flex-center no-padding-left-right">
                      </Col>
                      <Col xs={10} className="padding-left-7">
                        <span>
                          {videoObj.name}
                        </span>
                      </Col>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default TutorialLinks;

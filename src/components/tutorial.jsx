import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Video from "./video"

class TutorialVideo extends Component {

    render() {
        return (
            <div style={{ paddingBottom: "100px", display: "flex", justifyContent: "center" }}>
                <Video tutorialData={this.props.tutorialData} />
            </div>
        );
    }
}

export default TutorialVideo;

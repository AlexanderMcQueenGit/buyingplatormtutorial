import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ReactPlayer from 'react-player'

class Video extends Component {

    render() {
        return (
            <div className="video-container">
                <ReactPlayer url={this.props.tutorialData.url} controls="true" width="80%" height="80%" />
            </div>
        );
    }
}

export default Video;
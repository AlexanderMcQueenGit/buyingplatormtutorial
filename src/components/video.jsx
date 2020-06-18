import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ReactPlayer from 'react-player'


class Video extends Component {

    render() {
        return (
            // <div className="video-container">
            //     <ReactPlayer url={this.props.tutorialData.url} controls="true" width="80%" height="80%" />
            // </div>
            <video className="video-container video-container-overlay" controls style={{ width: "800px" }} >
                <source src={this.props.tutorialData.url} type="video/mp4" />
            </video>
        );
    }
}

export default Video;
import React, { Component } from "react";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import ReactPlayer from 'react-player'

import { Player } from 'video-react';

import "../../node_modules/video-react/dist/video-react.css"

class Video extends Component {

    render() {
        return (
            // <div className="video-container" style={{ width: "800px", height: "415px" }} >
            //     <ReactPlayer url={this.props.tutorialData.url} controls="true" width="100%" height="100%" />
            // </div>
            // <div style={{ width: "800px" }}>
            //     <video className="video-container video-container-overlay" controls style={{ width: "100%" }} >
            //         <source src={this.props.tutorialData.url} type="video/mp4" style={{ zIndex: "1" }} />
            //     </video>
            // </div>
            <Player
                playsInline
                src={this.props.tutorialData.url}
            />
        );
    }
}

export default Video;
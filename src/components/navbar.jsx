import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";

class NavbarAMQ extends Component {
  state = {};

  redirectAMQ = () => {
    window.localStorage.setItem("model_part", "ModelS");
    window.top.location = "https://www.alexandermcqueen.io";
  };

  render() {
    return (
      <Navbar className="amqnav" fixed="top">
        <Navbar.Brand>
          {this.props.location.pathname === "/inputs" ? (
            <Link to="/" className="inputcontainer">
              <img
                src="https://icarr-cdn.s3-eu-west-1.amazonaws.com/images/input-tables/AMQ-LOGO-2.png"
                // width="30"
                // height="30"
                className="d-inline-block align-top amqlogo"
                alt="React Bootstrap logo"
              />
            </Link>
          ) : (
            <a
              onClick={this.redirectAMQ}
              className="inputcontainer"
              style={{ cursor: "pointer" }}
            >
              <img
                src="https://icarr-cdn.s3-eu-west-1.amazonaws.com/images/input-tables/AMQ-LOGO-2.png"
                // width="30"
                // height="30"
                className="d-inline-block align-top amqlogo"
                alt="React Bootstrap logo"
              />
            </a>
          )}
        </Navbar.Brand>
        <Navbar.Text className="justify-content-end username" id="authusername">
          Hi
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default withRouter(NavbarAMQ);

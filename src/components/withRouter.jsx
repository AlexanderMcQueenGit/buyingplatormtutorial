import React from "react";
import { withRouter } from "react-router";

class Main extends React.Component {
  render() {
    console.log(this.props.location.pathname); // outputs currently active route
    return this.props.children;
  }
}
export default withRouter(Main);

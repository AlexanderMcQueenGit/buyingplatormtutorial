import React, { Component } from "react";
import { Table } from "react-bootstrap";
import _ from "lodash";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class ChoosenStore extends Component {
  render() {
    return (
      <div className="choosenstore_row">
        {/* {this.props.TableData.slice(0, 1).map((item) => {
          var CountryCodeImage =
            item.ConsolidatedLocationDesc === "AMQ.com"
              ? "https://icarr-cdn.s3-eu-west-1.amazonaws.com/images/input-tables/wwimage.png"
              : "https://lipis.github.io/flag-icon-css/flags/4x3/" +
                item.ConsolidatedLocationDesc.substring(0, 2)
                  .toLowerCase()
                  .replace("uk", "gb") +
                ".svg";

          return (
            <div
              // sm={12}
              // md={6}
              key={item.ConsolidatedJDACode}
              className={"scopeitemchoosen"}
            >
              <div className={"storescopecontainer_choosen "}>
                <div className="flex-center no-padding-left-right">
                  <div className="flagcontainer">
                    <img className="countryflag" src={CountryCodeImage}></img>
                  </div>
                </div>
                <div className="padding-left-10">
                  <span>
                    {item.ConsolidatedLocationDesc === "AMQ.com"
                      ? "AMQ.com"
                      : item.ConsolidatedLocationDesc.slice(4)}
                    <span className="newstore">
                      {item.FlagNew === 1 ? "New" : ""}
                    </span>
                  </span>
                </div>
              </div> */}
        {/* </div>
    );
  }) */}
}
      </div >
    );
  }
}

export default ChoosenStore;

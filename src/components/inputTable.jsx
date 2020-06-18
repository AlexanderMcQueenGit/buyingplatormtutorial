import React, { Component } from "react";
import { Table } from "react-bootstrap";
import _ from "lodash";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

class InputTableSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="flexwrapper">
          {/* <Table>
            <thead>
              <tr>
                <th className="inputdimension"></th>
                <th>SKU Capacity</th>
              </tr>
            </thead>
            <tbody>
              {this.props.TableData.map((rowitem) => {
                return (
                  <tr key={rowitem.Function}>
                    <td className="inputdimension">
                      <div className="inputdimension_container">
                        {rowitem.Function}
                      </div>
                    </td>

                    <td>
                      <input
                        className={
                          rowitem.Error === true
                            ? "userinput fpmix errorborder"
                            : "userinput fpmix"
                        }
                        onChange={(e) =>
                          this.props.FPInputChange(
                            e,
                            rowitem.Function,
                            rowitem.ConsolidatedJDACode
                          )
                        }
                        placeholder={rowitem.InputValue}
                      ></input>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <th className="inputdimension bold_text">Total</th>
              <th className="bold_text">
                {isNaN(
                  _.sumBy(this.props.TableData, function (item) {
                    return parseFloat(item.InputValue);
                  })
                )
                  ? "nm"
                  : _.sumBy(this.props.TableData, function (item) {
                      return parseFloat(item.InputValue);
                    })
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </th>
            </tfoot>
          </Table> */}
        </div>
      </React.Fragment>
    );
  }
}

export default InputTableSection;

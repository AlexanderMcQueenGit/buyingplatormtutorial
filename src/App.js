import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavbarAMQ from "./components/navbar";
import TutorialLinks from "./components/tutorialLinks";
import { BrowserRouter as Router, Switch, Route, withRouter, Link } from "react-router-dom";
import InputTableSection from "./components/inputTable";
import _ from "lodash";
import InputButton from "./components/inputbuttons";
import { Form, Row, Container, Col, Button } from "react-bootstrap";
import ChoosenStore from "./components/choosenstore";
import ScrollToTop from "./components/topscrollrouter";
import Tutorial from "./components/tutorial"

const axios = require("axios");

class App extends Component {
  state = {
    Scope: [],
    SelectedScope: [],
    SelectedScopeItems: [],
    activeVideoIndex: 0,
    tutorialsList: [
      {
        name: "Define Your Scope",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+0+.mp4",
        step: "Step 0"
      },
      {
        name: "Menu + Filters",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+1++-+MENU+%2B+FILTER.mp4",
        step: "Step 1"
      },
      {
        name: "Product + KPI",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+1+-+PRODUCT+%2B+KPI.mp4",
        step: "Step 1"
      },
      {
        name: "Step Unlocked",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+1+-+STEP+UNLOCKED.mp4",
        step: "Step 1"
      },
      {
        name: "Rail Allocation",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+2.mp4",
        step: "Step 2"
      },
      {
        name: "Fine Tunes Store Selection",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+3.mp4",
        step: "Step 3"
      },
      {
        name: "Add + Edit Product",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+4+-+ADD+AND+EDIT+PRODUCT.mp4",
        step: "Step 4"
      },
      {
        name: "KPI, Sort + Filter",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+4+-+KPI+SORT+FILTER.mp4",
        step: "Step 4"
      },
      {
        name: "Line Analysis",
        url: "https://static-cdn-assets.icarrteamdomain.co.uk/tutorialVideos/STEP+4+-+LINE+ANALYSIS+.mp4",
        step: "Step 4"
      }
    ]
  }


  componentDidMount() {
    const state = [...this.state.tutorialsList]
    state.forEach(function (element, i) {
      element.videoIndex = i
    });

    this.setState({ tutorialsList: state })
  }

  handleClickScope = (activeVideoIndex) => {
    this.setState({ activeVideoIndex })
  }

  handleNextButton = () => {
    this.setState({ activeVideoIndex: this.state.activeVideoIndex + 1 })
  }

  handlePreviousButton = () => {
    this.setState({ activeVideoIndex: this.state.activeVideoIndex - 1 })
  }

  render() {

    const uniqueSteps = _.uniq(_.map(this.state.tutorialsList, "step"))


    const tutorialData = this.state.tutorialsList.filter((stepObj) => {
      return (
        stepObj.videoIndex === this.state.activeVideoIndex
      );
    })
    [0]


    return (
      <div className="App">
        <Router>
          <NavbarAMQ></NavbarAMQ>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <div className="scopecontainer">
                  <div className="scopetitle bottommargin">
                    Choose your Video
                  </div>

                  {uniqueSteps.map((step) => {

                    return (

                      <TutorialLinks
                        key={step}
                        step={step}
                        videoStepObject={_.filter(this.state.tutorialsList, [
                          "step",
                          step,
                        ])}
                        // SelectedScope={this.state.SelectedScope}
                        handleClickScope={this.handleClickScope}
                      ></TutorialLinks>
                    );
                  })}
                </div>
              </Route>
              <Route path="/tutorial-page">
                <div className="scopecontainer">
                  <div className="scopetitle bottommargin">
                    {tutorialData === undefined ? "" : tutorialData.step + " : " + tutorialData.name}
                  </div>

                  <div className="inputcontainer">
                    <div className="flexwrapper">
                      <Tutorial tutorialData={tutorialData}
                      />
                    </div>
                  </div>
                  <InputButton
                    handleNextButton={this.handleNextButton}
                    handlePreviousButton={this.handlePreviousButton}
                    activeVideoIndex={this.state.activeVideoIndex}
                    tutorialsList={this.state.tutorialsList}
                  ></InputButton>
                </div>
              </Route>
            </Switch>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

export default App;

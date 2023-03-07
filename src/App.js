import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavigationContainer from "./nav/nav-container";
import Home from "./pages/home";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />

            <Routes>
              <Route exact path='/' component={Home} />
            </Routes>
          </div>
        </Router>

        <h1>Nat chat app</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    );
  }
}

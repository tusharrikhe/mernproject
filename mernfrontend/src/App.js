import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Create from "./components/Create";
import Get from "./components/Get";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Update from "./components/Update";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1 align="center">Product List Demo</h1>
          <ul>
            <li>
              <Link to={"/create"}>Create</Link>
            </li>
            <li>
              <Link to={"/get"}>Get</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/create" component={Create} />
            <Route exact path="/get" component={Get} />
            <Route exact path="/update" component={Update} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

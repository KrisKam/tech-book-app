import React, { Component } from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

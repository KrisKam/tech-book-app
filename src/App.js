import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Books from "./components/Books";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Header />
          
          <Route exact path="/" component={Home}/>
          <Route exact path="/books" component={Books}/>
          {/* <Route exact path="/authors" component={Authors}/>
          <Route path="/books/:id" component={Book}/>
          <Route path ="authors/:id" component={Author}/>
          <Route path="/books/new" component={NewBook}/>  
          <Route path ="books/:id/edit" component={EditBook}/>
          <Route path ="books/:id/delete" component={DeleteBook}/>
          <Route path="/authors/new" component={NewAuthor}/>  
          <Route path ="authors/:id/edit" component={EditAuthor}/>
          <Route path ="authors/:id/delete" component={DeleteAuthor}/> */}
        </div>
      </Router>

    );
  }
}

export default App;

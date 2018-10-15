import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Books from "./components/Books";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import Authors from "./components/Authors";
import Author from "./components/Author";
import NewAuthor from "./components/NewAuthor";
import {Container} from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

class App extends Component {


  render() {

    return (

      <Router>
        <Container className="m-0, p-0">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/books" component={Books}/> 
            <Route exact path="/authors" component={Authors}/>
            <Route path="/books/new" component={NewBook}/>
            <Route path="/authors/new" component={NewAuthor}/>
            <Route path="/books/:post_id" component={Book}/>
            <Route path ="/authors/:post_id" component={Author}/> 
            {/* <Route path ="/books/:id/edit" component={EditBook}/> */}
            {/* <Route path ="/books/:id/delete" component={DeleteBook}/> */}  
            {/* <Route path ="/authors/:id/edit" component={EditAuthor}/> */}
            {/* <Route path ="authors/:id/delete" component={DeleteAuthor}/> */}
          </Switch>
        </Container>
      </Router>

    );
  }
}

export default App;

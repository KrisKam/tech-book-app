import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Books from "./components/Books";
import Authors from "./components/Authors";
import {Container} from "reactstrap";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

class App extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    return fetch(`https://tech-books-database.herokuapp.com/`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {data: result}
        )
        console.log(this.state.data)
      })
  }

  render() {

    return (

      <Router>
        <Container className="m-0, p-0">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/books" component={Books}/>
            <Route exact path="/authors" component={Authors}/>
            {/* <Route path="/books/:id" component={Book}/>
            <Route path ="/authors/:id" component={Author}/>
            <Route path="/books/new" component={NewBook}/>  
            <Route path ="/books/:id/edit" component={EditBook}/>
            <Route path ="/books/:id/delete" component={DeleteBook}/>
            <Route path="/authors/new" component={NewAuthor}/>  
            <Route path ="/authors/:id/edit" component={EditAuthor}/>
            <Route path ="authors/:id/delete" component={DeleteAuthor}/> */} 
          </Switch>
        </Container>
      </Router>

    );
  }
}

export default App;

import React, {Component} from "react";
import {Card, CardText, CardBody, CardLink} from "reactstrap";
import {Link} from "react-router-dom";

class Books extends Component {

  state = {
    bookData: [],
    authorNames: []
  }

  componentDidMount() {
    // this.getAllData();
    // this.getAuthorInfo();
    this.getBookInfo();
  }

  // getAllData = () => {
  //   return fetch(`https://tech-books-database.herokuapp.com/`)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.getAuthors(result);
  //     })
  // }

  // getAuthorInfo = () => {
  //   return fetch(`https://tech-books-database.herokuapp.com/authors`)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.getAuthors(result);
  //     })
  // }

  getBookInfo = () => {
    return fetch(`https://tech-books-database.herokuapp.com/authors`)
      .then(result => result.json())
      .then(result => {
        this.filterBookData(result);
      })
  }

  // getAuthors = authors => {
  //   console.log("consolidate: ", authors);
  //   const authorNames = {};
  //   let bookID = "";
  //   let names = [];
  //   authors.data.forEach(author => {        
  //     if (authorNames.hasOwnProperty(author.book_id)) {
  //       names.push(`, ${author.authorFirst} ${author.authorLast}`)
  //       authorNames[bookID] = names;
  //     } else {
  //       bookID = author.book_id;
  //       names = [`${author.authorFirst} ${author.authorLast}`]
  //       authorNames[bookID] = names;
  //       authorNames["book_id"] = author.book_id;
  //     }
  //   })
  //   console.log("authNames: ", authorNames);
  //   this.setState(
  //     {
  //       bookData: authors.data,
  //       authorNames: authorNames
  //     }
  //   ) 
  //   console.log("state: ", this.state)
  //   return authorNames;
  // }

  // filterBookData = (bookData) => {
  //   let tempID = 0;
  //   return bookData.filter(book => {
  //     if (tempID !== book.book_id) {
  //       tempID = book.book_id;
  //       return book;
  //     }
  //   })
  // }

  render() {

    const {bookData} = this.state;
    const createBookCard = bookData.map((book, i) => {
      return ( 
        <Card className="flex-md-row mb-4 box-shadow h-md-250 shadow-sm" key={i}>
          <CardBody className="d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">Genre: {book.genre}</strong>
            <h3 className="mb-0">
              <Link to="#" className="text-dark">{book.title}</Link>
            </h3> 
            <div className="mb-1 text-muted">By: {book.authorFirst} {book.authorLast}</div>
            <CardText className="mb-auto">{book.description}</CardText>
            <div>
              <CardLink href="#">Edit</CardLink>
              <CardLink href="#">Remove</CardLink>
            </div>
          </CardBody>
          <img className="card-img-right flex-auto d-none d-sm-block BooksCard" alt={book.title + " cover"} src={book.cover}/>
        </Card>
      )
    })

    return (
     <div>
      {createBookCard}
     </div>
    )
  }
}

export default Books;
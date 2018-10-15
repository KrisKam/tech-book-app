import React, {Component} from "react";
import {Card, CardText, CardBody, CardLink} from "reactstrap";
import {Link} from "react-router-dom";

class Books extends Component {

  state = {
    books: [],
    authors: []
  }

  componentDidMount() {
    this.getAuthorInfo();
    this.getBookInfo();
  }

  getAuthorInfo = () => {
    fetch(`https://tech-books-database.herokuapp.com/authors`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            authors: result.authors
          }
        )
      })
  }

  getBookInfo = () => {
    return fetch(`https://tech-books-database.herokuapp.com/books`)
      .then(result => result.json())
      .then(result => this.consolidateBooks(result))
  }

  consolidateBooks = (result) => {
    console.log(result.books)
    const filteredID = [];
    const filteredBooks = result.books.filter(book => {
      if (filteredID.includes(book.book_id)) {
        return false;
      } else {
        filteredID.push(book.book_id)
        return true; 
      }
    })
    this.setState(
      {
        books: filteredBooks 
      }
    )
    console.log("filtered books: ", this.state.books)
  }

  bookAuthors = (authors, id) => {
    let authorList = authors.map(author => {
      console.log("author.book_id: ", author.book_id, " id: ", id)
      if(author.book_id === id) {
        console.log(author)
        return <div key={author.author_id}>{author.authorFirst} {author.authorLast}</div>
      } else {
        return null;
      }
    })
    return <span>{authorList}</span>
  }

  render() {

    const {books} = this.state;
    const createBookCard = books.map(book => {
      if (book.book_id === parseInt(this.props.match.params.post_id, 10))
      return ( 
        <Card className="flex-md-row mb-4 box-shadow h-md-250 shadow-sm" key={book.book_id}>
          <CardBody className="d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">Genre: {book.genre}</strong>
            <h3 className="mb-0">
              <Link to={`/books/${book.book_id}`} className="text-dark">{book.title}</Link>
            </h3> 
            <div className="mb-1 text-muted">Author(s): {this.bookAuthors(this.state.authors, book.book_id)}</div>
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
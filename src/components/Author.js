import React, {Component} from "react";
import {Card, CardText, CardBody, CardLink} from "reactstrap";
import {Link} from "react-router-dom";

class Author extends Component {

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
      .then(result => this.consolidateAuthors(result))
  }

  getBookInfo = () => {
    return fetch(`https://tech-books-database.herokuapp.com/books`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            books: result.books
          }
        )
      })
  }

  consolidateAuthors = (result) => {
    const filteredID = [];
    const filteredAuthors = result.authors.filter(author => {
      if (filteredID.includes(author.author_id)) {
        return false;
      } else {
        filteredID.push(author.author_id)
        return true; 
      }
    })
    this.setState(
      {
        authors: filteredAuthors 
      }
    )
  }

  authorBooks = (books, id) => {
    let titleList = books.map(books => {
      if(books.author_id === id) {
        return <div key={books.book_id}>{books.title}</div>
      } else {
        return null;
      }
    })
    return <span>{titleList}</span>
  }

  render() {
    //console.log("post_id is a string!: ", this.props.match.params.post_id)
    const {authors} = this.state;
    const createAuthorCard = authors.map((author) => {
      if (author.author_id === parseInt(this.props.match.params.post_id, 10)) {
        console.log("author_id: ", author.author_id);
        return ( 
          <Card className="flex-md-row mb-4 box-shadow h-md-250 shadow-sm" key={author.author_id}>
            <CardBody className="d-flex flex-column align-items-start">
              <h3 className="mb-0">
                <Link to={`/authors/${author.author_id}`} className="text-dark">Author: {author.authorFirst} {author.authorLast}</Link>
              </h3>
              <CardText className="mb-auto">{author.bio}</CardText>
              <div className="mb-1 text-muted">Book(s): {this.authorBooks(this.state.books, author.author_id)}</div>
              <div>
                <CardLink href="#">Edit</CardLink>
                <CardLink href="#">Remove</CardLink>
              </div>
            </CardBody>
            <img className="card-img-right flex-auto d-none d-sm-block AuthorsCard" alt={author.authorLast + " portrait"} src={author.portrait}/>
          </Card>
        )
      } else {
        return null;
      }

    })

    return (
     <div>
      {createAuthorCard} 
     </div>
    )
  }
}

export default Author;
import React from "react";
import {Card, CardText, CardBody, CardLink} from "reactstrap";
import {Link} from "react-router-dom";


const BookCard = (props) => {
  return (
    <Card className="flex-md-row mb-4 box-shadow h-md-250">
      <CardBody className="d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">Genre: {this.props.genre}</strong>
        <h3 className="mb-0">
          <Link to="#" className="text-dark">Book Title</Link>
        </h3> 
        <div className="mb-1 text-muted">By: Author</div>
        <CardText className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</CardText>
        <div>
          <CardLink href="#">Edit</CardLink>
          <CardLink href="#">Remove</CardLink>
        </div>
      </CardBody>
      <img className="card-img-right flex-auto d-none d-md-block BooksCard" alt="Book Cover [200x250]" src="#"/>
    </Card>
  )
}

export default BookCard;
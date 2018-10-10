import React, {Component} from "react";
import {Link} from 'react-router-dom'
import {Row, Col, Card, CardTitle, CardImg, CardImgOverlay} from "reactstrap";
import books from "../images/books.jpg";
import typewriter from "../images/typewriter.jpg";

class Home extends Component {

  state = {
    bookData: []
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData = () => {
    return fetch(`https://tech-books-database.herokuapp.com/`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {bookData: result.data}
        )
      })
  }

  render() {
    return (
    
      <Row className="mt-3">
        <Col md="6">
          <div>
            <Link to="/books">
              <Card inverse>
                <CardImg width="100%" src={books} alt="Books" />
                <CardImgOverlay>
                  <CardTitle className="text-center HomeCardText">Books</CardTitle>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
        </Col>
        <Col md="6">
          <div>
            <Link to="/authors">
              <Card inverse>
                <CardImg width="100%" src={typewriter} alt="Typewriter" />
                <CardImgOverlay>
                  <CardTitle className="text-center HomeCardText">Authors</CardTitle>
                </CardImgOverlay>
              </Card>
            </Link>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Home;


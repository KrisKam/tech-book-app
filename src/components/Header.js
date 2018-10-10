import React from "react";
import {Link} from "react-router-dom";
import {Navbar, NavbarBrand, NavItem, Nav} from "reactstrap";

const Header = () => {

  return (
    <Navbar className="bg-info mb-2">
      <NavbarBrand className="text-white">
        <i className="fas fa-book-reader fa-3x" /> 
        <span className="HeaderBrand"> Tech Book App</span>
      </NavbarBrand>
      <Nav className="pt-3">
        <NavItem>
          <Link to="/" className="text-white HeaderText px-4">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/books" className="text-white HeaderText px-4">Books</Link>
        </NavItem>
        <NavItem>
          <Link to="/authors" className="text-white HeaderText" href="/components/authors">Authors</Link>
        </NavItem>       
      </Nav>
    </Navbar>
  )
}

export default Header;


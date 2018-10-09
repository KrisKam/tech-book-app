import React from "react";
import {Navbar, NavbarBrand} from "reactstrap";

const Header = () => {

  return (
    <Navbar className="bg-info">
      <NavbarBrand className="text-white">
        <i className="fas fa-book-reader fa-4x d-inline" /> 
        <h1 className="d-inline pl-3">Tech Book App</h1>
      </NavbarBrand>
    </Navbar>
  )
}

export default Header;


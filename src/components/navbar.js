import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Search from "./search";
import './navbar.css'

const Navi = ({ search }) => {
  return (
    <Container>
      <Navbar className="Navi"  variant='dark'>
        <Navbar.Brand  href="/">Apex Stat</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Search search={search}/>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navi;

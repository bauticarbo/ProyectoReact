import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Tu Mate</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mates</Nav.Link>
            <Nav.Link href="#features">Bombillas</Nav.Link>
            <Nav.Link href="#pricing">Materas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

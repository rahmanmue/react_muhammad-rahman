import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Top Search React JS Front-End Engineer
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

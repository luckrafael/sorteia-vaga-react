import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";
import Menu from "../../layout/Navbar";
class Sobre extends Component {
  render() {
    return (
      <Container>
        <Menu />
        <header>
          <h1>Página Sobre</h1>
        </header>
        <p>
          <Link to="/">Ir para a página Home</Link>
        </p>
        <Footer />
      </Container>
    );
  }
}

export default Sobre;

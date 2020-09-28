import React from "react";
import { Component } from "react";
import { Nav, Navbar, Button, Container } from "react-bootstrap";
import sobre from "../../pages/sobre";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <img className="img-fluid" src={Logo} />

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" title="Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link page-scroll" to="/sobre">
                    Sobre
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" title="Soluções">
                    Soluções
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" title="Preços">
                    Preços
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page" title="FAQ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" title="Contato">
                    Contato
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto navbar-cta">
                <li className="nav-item">
                  <a className="nav-link nav-button btn-2" title="Login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-button btn-1" title="Testar agora">
                    Testar agora
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    );
  }
}

export default Home;

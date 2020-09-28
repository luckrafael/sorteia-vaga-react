import { Link } from "react-router-dom";
import React from "react";
import { Component } from "react";
import Menu from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import Background from "../../assets/images/main-background.png";
import { Button, Container } from "react-bootstrap";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Menu />
        <main class="container-fluid index-background">
          <div class="container">
            <div class="row align-items-center full-background">
              <section class="col-xl-6 col-lg-9 col-md-9 col-12 main-block">
                <h1 class="title">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit?
                </h1>

                <p class="subtitle">
                  Sed varius tortor ac ex sodales lobortis. Fusce laoreet sem
                  vel lectus condimentum vestibulum. Maecenas finibus pulvinar
                  mauris, id rhoncus justo scelerisque sit amet.
                </p>
                <div className="button">
                  <Button className="button" size="lg">
                    Quero ultilizar
                  </Button>
                  <a className="btn btn-1 btn-m">Saiba Mais</a>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </Container>
    );
  }
}

export default Home;

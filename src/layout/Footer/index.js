import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.svg";
import Youtube from "../../assets/images/youtube.svg";
import "./index.css";
class Footer extends Component {
  render() {
    return (
      <Container fluid>
        <footer class="container b-footer">
          <div class="row align-items-center">
            <section class="col-xl-4 col-md-3 col-12">
              <img class="img-fluid d-block mx-auto" src={Logo} />
            </section>

            <section class="col-xl-4 col-md-5 col-12">
              <ul class="nav social-nav justify-content-center">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <img class="img-fluid d-block mx-auto" src={Facebook} />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <img class="img-fluid d-block mx-auto" src={Instagram} />
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    <img class="img-fluid d-block mx-auto" src={Youtube} />
                  </Link>
                </li>
              </ul>
            </section>
            <section>
              <p>
                ®2020 Sorteia Vagas. <br></br>
                Todos os direitos reservados.
              </p>
            </section>
          </div>
        </footer>
      </Container>
    );
  }
}

export default Footer;

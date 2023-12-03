import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import logo from "../../assets/all-images/godinho.png"

const quickLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/cars",
    display: "Carros",
  },
  {
    path: "/financiamento",
    display: "Financiamento",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <h5 className="footer__link-title">Quem Somos</h5>
            <p className="footer__logo-content">
              Na Godinho Veículos, realizamos seus sonhos sobre quatro rodas.
              Além de oferecer veículos de alta qualidade, valorizamos cada cliente como parte de nossa família automotiva.
              Confiança, transparência e satisfação garantida em cada negócio.
              Descubra a excelência em cada trajeto.
              Seu próximo destino começa aqui.
            </p>

            <div className="logo footer__logo">
              <div className="logo">
                <img src={logo} className="logo"></img>
              </div>
            </div>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Unidade Principal</h5>
              <p className="office__info">Avenida dos Três Poderes, n° 375 - Residencial Central Parque</p>
              <p className="office__info">Telefone: (11) 1234-1234</p>

              <p className="office__info">Email: godinhoveiculos@gmail.com</p>

              <p className="office__info">Horário de Funcionamento: Segunda a Sábado, 7h - 20h</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Encontre-nos</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.547131986774!2d-47.30420681409162!3d-23.18672314633147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf53972da3336f%3A0xceb3df208b4b53a4!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Salto!5e0!3m2!1spt-BR!2sbr!4v1693699648649!5m2!1spt-BR!2sbr"
                allowFullScreen={true} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright {year}.
                Todos os direitos reservados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

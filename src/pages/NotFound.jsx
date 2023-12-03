import React from "react";

import Helmet from "../components/Helmet/Helmet";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const NotFound = () => {
  return (
    <Helmet title="Página Não Encontrada">
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section__title">Página não encontrada</h2>
              <NavLink
                to={"/home"}
                className={"nav__active nav__item"}>
                Retornar à página inicial
              </NavLink>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>)
};

export default NotFound;

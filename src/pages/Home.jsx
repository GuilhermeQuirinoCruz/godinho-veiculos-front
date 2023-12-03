import React, { useState, useEffect } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/v1/company/menubook-by-id')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <div className="hero__form">
          <Container>
          </Container>
        </div>
      </section>

      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Confira as</h6>
              <h2 className="section__title">Melhores Ofertas</h2>
            </Col>
            {
              data.map((data, brandIndex) => (
                data.categorys.map((brands, brandsIndex) => (
                  brands.items.map((cars, brandsIndex) => (
                    <CarItem item={cars} key={cars.id}></CarItem>
                  ))
                ))
              ))
            }
          </Row>
        </Container>
      </section>

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">O que os clientes dizem</h6>
              <h2 className="section__title">Avaliações</h2>
            </Col>
            
            <Testimonial />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import axios from "axios";

const CarListing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/v1/company/menubook-by-id')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Helmet title="Carros">
      <CommonSection title="Lista de Carros" />

      <section>
        <Container>
          <Row>
            {data.length === 0 ?
              <Col lg="12" className="text-center mb-5">
                <h2 className="section__title">Carregando ofertas...</h2>
              </Col>
              : data.map((data, brandIndex) => (
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
    </Helmet>
  );
};

export default CarListing;


import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useLocation } from "react-router-dom";

import "../styles/car-details.css";

const CarDetails = (props) => {
  const location = useLocation();
  if (!location.state) {
    window.location.replace(window.location.href.split("3000/")[0] + "3000/home");
  }
  const { from } = location.state

  const nomeAdicionais = {
    airBag: "Airbag",
    airConditioning: "Ar-condicionado",
    alarm: "Alarme",
    armored: "Blindado",
    eletricGlass: "Vidro elétrico",
    eletricLock: "Trava elétrica",
    reverseCamera: "Câmera de ré",
    reverseSensor: "Sensor de ré",
    sound: "Som",
  };

  const [fotoAtual, setFotoAtual] = useState(0);

  return (
    <Helmet title={from.vehicle.model}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={from.photos[fotoAtual].url} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{from.vehicle.model}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${from.vehicle.amount}.00
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({1200} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {from.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {from.vehicle.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {from.vehicle.exchange}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {from.vehicle.mileage}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {"GPS"}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {from.vehicle.doors}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {from.vehicle.brand}
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <h6 className="section__title">Adicionais</h6>
              <div
                className=" d-flex align-items-center mt-3"
                style={{ columnGap: "1rem" }}
              >
                {Object.entries(from.vehicle.additionals).map((adicional) => (
                  adicional[1] ?
                    <span className=" d-flex align-items-center gap-1 section__description">
                      <i
                        className="ri-arrow-up-line"
                        style={{ color: "#f9a826" }}
                      ></i>{" "}
                      {nomeAdicionais[adicional[0]]}
                    </span>
                    : <></>
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <h6 className="section__title">Imagens</h6>
            <Col lg="12" className="img-display">
              {from.photos.map((foto, index) => (
                <button onClick={() => {setFotoAtual(index)}}>
                  <img src={foto.url} alt="" className="img" />
                </button>
              ))
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
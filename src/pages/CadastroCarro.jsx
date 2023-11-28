import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import axios from "axios";

function CadastroCarro() {
  const [marcas, setMarcas] = useState([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("0");
  const [modelos, setModelos] = useState([]);

  const marcaRef = useRef('');

  async function fetchMarcas() {
    axios
      .get("https://parallelum.com.br/fipe/api/v2/cars/brands")
      .then((response) => {
        console.log(response);

        setMarcas([
          {
            "code": "0",
            "name": "Selecione uma marca",
          },
          ...response.data,
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function selecionarMarca(event) {
    setMarcaSelecionada(event.target.value);
  }

  async function fetchModelos() {
    if (marcaSelecionada === "0" || marcaSelecionada === 0) {
      setModelos([]);
    } else {
      axios
        .get(`https://parallelum.com.br/fipe/api/v2/cars/brands/${marcaSelecionada}/models`)
        .then((response) => {
          console.log(response);
          setModelos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => { fetchMarcas(); }, []);

  useEffect(() => {
    fetchModelos();
  }, [marcaSelecionada]);

  async function cadastrarCarro(event) {
    event.preventDefault();

    console.log(marcaRef.current.value);
  }

  function formCadastro() {
    return (
      <div>
        <h6 className="fw-bold mb-4">Dados do Carro</h6>
        <Form onSubmit={cadastrarCarro}>
          <FormGroup className="contact__form">
            <select name="sltMarca" id="sltMarca" onChange={selecionarMarca} ref={marcaRef}>
              {marcas.map((marca) => {
                return (
                  <option key={marca.code} value={marca.code}>
                    {marca.name}
                  </option>
                );
              })}
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <select name="sltModelo" id="sltModelo">
              {modelos.length === 0 ?
                <option key="carregando" value="0">
                  Nenhuma marca selecionada
                </option>
                : modelos.map((modelo) => {
                  return (
                    <option key={modelo.code} value={modelo.name}>
                      {modelo.name}
                    </option>
                  );
                })}
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Your Name" type="text" />
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Email" type="email" />
          </FormGroup>

          <FormGroup className="contact__form">
            <textarea
              rows="5"
              placeholder="Message"
              className="textarea"
            ></textarea>
          </FormGroup>

          <button className=" contact__btn" type="submit">
            Cadastrar
          </button>
        </Form>
      </div>
    );
  }

  return (
    <Helmet title="Cadastro de Carros">
      <CommonSection title="Cadastro de Carros" />
      <section>
        <Container>
          <Row>
            <Col lg="14" md="14">
              {marcas.length === 0 ?
                <div>Carregando...</div> : formCadastro()
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default CadastroCarro;

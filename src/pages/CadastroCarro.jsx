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
  const modeloRef = useRef('');
  const descricaoRef = useRef('');
  const fotosRef = useRef('');
  const anoRef = useRef('');
  const exchangeRef = useRef('');
  const fuelRef = useRef('');
  const steeringRef = useRef('');
  const kilometragemRef = useRef(0);
  const portasRef = useRef(0);
  const placaRef = useRef('');
  const corRef = useRef('');

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

    const fotos = fotosRef.current.value
      .split("\n")
      .map((foto) => {
        return {
          type: "WEB",
          url: foto
        }
      });

    const car = {
      item: {
        category: marcaRef.current.value,
        description: descricaoRef.current.value,
        name: modeloRef.current.value,
        photos: fotos,
        vehicle: {
          brand: "brand",
          model: modeloRef.current.value,
          year: anoRef.current.value,
          exchange: exchangeRef.current.value,
          fuel: fuelRef.current.value,
          steering: steeringRef.current.value,
          power: "1.4",
          type: "Carros, vans e utilitários",
          mileage: kilometragemRef.current.value,
          doors: portasRef.current.value,
          licensePlate: placaRef.current.value,
          color: corRef.current.value,
          amount: 1,
          promotion: null
        }
      }
    };

    console.log(car);
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
            <select name="sltModelo" id="sltModelo" ref={modeloRef}>
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
            <textarea
              rows="2"
              placeholder="Descrição do carro"
              className="textarea"
              ref={descricaoRef}
            ></textarea>
          </FormGroup>

          <FormGroup className="contact__form">
            <textarea
              rows="4"
              placeholder="Fotos, separadas por linha"
              className="textarea"
              ref={fotosRef}
            ></textarea>
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Ano" type="number" innerRef={anoRef} />
          </FormGroup>

          <FormGroup className="contact__form">
            <select name="exchange" id="exchange" ref={exchangeRef}>
              <option key="exchange-automatico" value="Automático">Automático</option>
              <option key="exchange-manual" value="Manual">Manual</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <select name="fuel" id="fuel" ref={fuelRef}>
              <option key="fuel-gasolina" value="Gasolina">Gasolina</option>
              <option key="fuel-diesel" value="Diesel">Diesel</option>
              <option key="fuel-eletrico" value="Elétrico">Elétrico</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <select name="steering" id="steering" ref={steeringRef}>
              <option key="steering-hidraulica" value="Hidráulica">Hidráulica</option>
              <option key="steering-eletrica" value="Elétrica">Elétrica</option>
              <option key="steering-manual" value="Manual">Manual</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Kilometragem" type="number" innerRef={kilometragemRef} />
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Portas" type="number" innerRef={portasRef} />
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Placa" type="text" innerRef={placaRef} />
          </FormGroup>

          <FormGroup className="contact__form">
            <Input placeholder="Cor" type="text" innerRef={corRef} />
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

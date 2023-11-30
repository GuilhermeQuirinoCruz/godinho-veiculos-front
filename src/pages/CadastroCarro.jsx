import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
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
  const powerRef = useRef(0);
  const kilometragemRef = useRef(0);
  const portasRef = useRef(0);
  const placaRef = useRef('');
  const corRef = useRef('');
  const precoRef = useRef(0);
  const airbagRef = useRef(false);
  const alarmeRef = useRef(false);
  const arRef = useRef(false);
  const travaRef = useRef(false);
  const vidroRef = useRef(false);
  const somRef = useRef(false);
  const sensorRef = useRef(false);
  const cameraRef = useRef(false);
  const blindadoRef = useRef(false);

  async function fetchMarcas() {
    const instance = axios.create({
      baseURL: 'https://parallelum.com.br/fipe/api/v2/cars',
      withCredentials: false,
    });

    instance
      .get("/brands")
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
      const instance = axios.create({
        baseURL: 'https://parallelum.com.br/fipe/api/v2/cars',
        withCredentials: false,
      });

      instance
        .get(`/brands/${marcaSelecionada}/models`)
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
          brand: marcas.find(marca => marca.code === marcaRef.current.value).name,
          model: modeloRef.current.value,
          year: anoRef.current.value,
          exchange: exchangeRef.current.value,
          fuel: fuelRef.current.value,
          steering: steeringRef.current.value,
          power: powerRef.current.value,
          type: "Carros, vans e utilitários",
          mileage: kilometragemRef.current.value,
          doors: portasRef.current.value,
          licensePlate: placaRef.current.value,
          color: corRef.current.value,
          additionals: {
            airBag: airbagRef.current.checked,
            alarm: alarmeRef.current.checked,
            airConditioning: arRef.current.checked,
            eletricLock: travaRef.current.checked,
            eletricGlass: vidroRef.current.checked,
            sound: somRef.current.checked,
            reverseSensor: sensorRef.current.checked,
            reverseCamera: cameraRef.current.checked,
            armored: blindadoRef.current.checked
          },
          amount: precoRef.current.value,
          promotion: null
        }
      }
    };

    console.log(car);

    const instance = axios.create({
      headers: {
        token: localStorage.getItem("token"),
        "company-token": localStorage.getItem("company-token"),
      }
    });

    // instance
    //   .post("/v1/company/menubook/item", car)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  function formCadastro() {
    return (
      <div>
        <h6 className="fw-bold mb-4">Dados do Carro</h6>
        <Form onSubmit={cadastrarCarro}>
          <FormGroup className="contact__form">
            <label htmlFor="sltMarca">Marca *</label>
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
            <label htmlFor="sltModelo">Modelo *</label>
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
            <label htmlFor="txtDescricao">Descrição *</label> <br />
            <textarea
              rows="2"
              placeholder="Descrição do carro"
              className="textarea"
              id="txtDescricao"
              name="txtDescricao"
              ref={descricaoRef}
              required>
            </textarea>
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="txtFotos">Fotos *</label> <br />
            <textarea
              rows="4"
              placeholder="Fotos, separadas por linha"
              className="textarea"
              id="txtFotos"
              name="txtFotos"
              ref={fotosRef}
              required>
            </textarea>
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="nmbAno">Ano *</label>
            <Input name="nmbAno" id="nmbAno" placeholder="Ano" type="number" innerRef={anoRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="sltExchange">Câmbio *</label>
            <select name="sltExchange" id="sltExchange" ref={exchangeRef}>
              <option key="exchange-automatico" value="Automático">Automático</option>
              <option key="exchange-manual" value="Manual">Manual</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="sltFuel">Tipo de Combustível *</label>
            <select name="sltFuel" id="sltFuel" ref={fuelRef}>
              <option key="fuel-gasolina" value="Gasolina">Gasolina</option>
              <option key="fuel-diesel" value="Diesel">Diesel</option>
              <option key="fuel-eletrico" value="Elétrico">Elétrico</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="sltSteering">Tipo de Direção *</label>
            <select name="sltSteering" id="sltSteering" ref={steeringRef}>
              <option key="steering-hidraulica" value="Hidráulica">Hidráulica</option>
              <option key="steering-eletrica" value="Elétrica">Elétrica</option>
              <option key="steering-manual" value="Manual">Manual</option>
            </select>
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="nbmPower">Cilindradas *</label>
            <Input name="nbmPower" id="nbmPower" placeholder="1.0, 1,4, 1.6, ..." type="number" step="0.1" innerRef={powerRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="nmbKm">Kilometragem *</label>
            <Input name="nmbKm" id="nmbKm" placeholder="Kilometragem" type="number" innerRef={kilometragemRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="nbmPortas">Portas *</label>
            <Input name="nbmPortas" id="nbmPortas" placeholder="Portas" type="number" innerRef={portasRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="txtPlaca">Placa *</label>
            <Input name="txtPlaca" id="txtPlaca" placeholder="Placa" type="text" innerRef={placaRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="txtCor">Cor *</label>
            <Input name="txtCor" id="txtCor" placeholder="Cor" type="text" innerRef={corRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label htmlFor="nmbPreco">Preço *</label>
            <Input name="nmbPreco" id="nmbPreco" placeholder="Preço" type="number" innerRef={precoRef} required />
          </FormGroup>

          <FormGroup className="contact__form">
            <label>Adicionais</label> <br />

            <Label check>
              <Input name="chkAirbag" id="chkAirbag" type="checkbox" innerRef={airbagRef} /> Airbag
            </Label>

            <Label check>
              <Input name="chkAlarme" id="chkAlarme" type="checkbox" innerRef={alarmeRef} /> Alarme
            </Label>

            <Label check>
              <Input name="chkAlarme" id="chkAlarme" type="checkbox" innerRef={arRef} /> Ar-condicionado
            </Label>

            <Label check>
              <Input name="chkTrava" id="chkTrava" type="checkbox" innerRef={travaRef} /> Trava elétrica
            </Label>

            <Label check>
              <Input name="chkVidro" id="chkVidro" type="checkbox" innerRef={vidroRef} /> Vidro elétrico
            </Label>

            <Label check>
              <Input name="chkSom" id="chkSom" type="checkbox" innerRef={somRef} /> Som
            </Label>

            <Label check>
              <Input name="chkSensor" id="chkSensor" type="checkbox" innerRef={sensorRef} /> Sensor de ré
            </Label>

            <Label check>
              <Input name="chkCamera" id="chkCamera" type="checkbox" innerRef={cameraRef}/> Câmera de ré
            </Label>

            <Label check>
              <Input name="chkBlindado" id="chkBlindado" type="checkbox" innerRef={blindadoRef} /> Blindado
            </Label>
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

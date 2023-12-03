import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import InputMask from 'react-input-mask';

import "../styles/contact.css";

const Financiamento = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState(0);
  const [valor, setValor] = useState(0);
  const [meses, setMeses] = useState(0);
  const [parcelas, setParcelas] = useState(0);
  const [isvisible, setIsVisible] = useState('visible');
  const [visible, setVisible] = useState('hidden');
  const [valorTotal, setValorTotal] = useState(0);

  function calcula(event) {
    event.preventDefault();

    const calculatedParcelas = (valor * (1 + (meses * 1.51) / 100)) / meses;
    setParcelas(calculatedParcelas);
    setValorTotal((calculatedParcelas * meses).toFixed(2));
    setVisible('visible');
    setIsVisible('hidden');
  };

  return (
    <Helmet title="Financiamento">
      <CommonSection title="Financiamento" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">SIMULAÇÃO DE FINANCIAMENTO</h6>

              <div id="simulacao" style={{ visibility: visible }}>
                <div>
                  {"Numero de Parcelas: " + meses}
                </div>
                <div>
                  {"Valor da Parcela: R$ " + parcelas}
                </div>
                <div>
                  {"Valor total ao final de " + meses + ' meses: R$ ' + valorTotal}
                </div>
              </div>

              <Form onSubmit={calcula}>
                <div className="info" style={{ visibility: isvisible }}>
                  <div className="form-group" >
                    <label htmlFor="nome">Nome Completo *</label>
                    <input type="text" className="form-control" id="nome" placeholder="Ex. João da Silva" required onChange={(e) => { setNome(e.target.value) }} />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <label htmlFor="cpf">CPF *</label>

                    <InputMask
                      className="form-control"
                      mask="999.999.999-99"
                      maskChar={null}
                      id="cpf"
                      type="text"
                      placeholder="Digite o CPF"
                      required
                      onChange={(e) => { setCpf(e.target.value) }}
                    />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <label htmlFor="valor">Valor Financiado *</label>
                    <input type="number" className="form-control" id="valor" placeholder="R$ 0,00" required onChange={(e) => { setValor(e.target.value) }} />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <label htmlFor="parcelas">Meses *</label>
                    <input type="number" className="form-control" id="parcelas" placeholder="Meses" required onChange={(e) => { setMeses(e.target.value) }} />
                  </div>
                  <br></br>

                  <div className="form-group">
                    <button className="btn btn-success" type="submit">Simular</button>
                  </div>
                </div>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Informações para contato</h6>
                <p className="section__description mb-0">
                  Avenida dos Três Poderes, n° 375 - Residencial Central Parque
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefone:</h6>
                  <p className="section__description mb-0">(11) 1234-1234</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">godinhoveiculos@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Financiamento;

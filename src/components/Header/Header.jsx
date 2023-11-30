import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/godinho.png"
import "../../styles/header.css";


const navLinks = [
  {
    path: "/home",
    display: "Home",
    requireLogin: false
  },
  {
    path: "/cars",
    display: "Carros",
    requireLogin: false
  },
  {
    path: "/financiamento",
    display: "Financiamento",
    requireLogin: false
  },
  {
    path: "/cadastro-carro",
    display: "Cadastrar Carro",
    requireLogin: true
  },
];


const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  function logout() {
    localStorage.setItem("token", "");
    localStorage.setItem("company-token", "");

    window.location.replace("http://localhost:3000/home");
  }

  return (
    <header className="header">
      {/* ============ header top ============
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">

              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line"></i> Login
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>

          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} className="logo"></img>
            </div>

            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>

              <div className="menu">
                {navLinks.map((item, index) => (
                  (!item.requireLogin || localStorage.getItem("token")) ?
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active nav__item" : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                    : <></>
                ))}
              </div>
            </div>

            {localStorage.getItem("token") ?
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link className=" d-flex align-items-center gap-1" onClick={logout}>
                  <i className="ri-login-circle-line txt"></i> Logout
                </Link>
              </div>
              :
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line txt"></i> Login
                </Link>
              </div>
            }
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import NotFound from "../pages/NotFound";
import Financiamento from "../pages/Financiamento";
import Login from "../pages/Login";
import CadastroCarro from "../pages/CadastroCarro";
import CarItem from "../components/UI/CarItem";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-carro" element={<CadastroCarro />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/carItem" exact element={<CarItem />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/financiamento" element={<Financiamento />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;

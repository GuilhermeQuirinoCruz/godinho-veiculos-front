import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  //const { imgUrl, model, carName, automatic, speed, price } = props.item;
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={props.item.photos[0].url} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{props.item.vehicle.model}</h4>
          <h6 className="rent__price text-center mt-">
            R${props.item.vehicle.amount}.00 <span></span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line"></i> {props.item.vehicle.model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line"></i> {props.item.vehicle.exchange}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line"></i> {props.item.vehicle.mileage}
            </span>
          </div>

          <div className="">
            <Link to={`/cars/${props.item.id}`} state={{ from: props.item }}>
              <button className=" w-50 car__item-btn car__btn-details" >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Col >
  );
};

export default CarItem;


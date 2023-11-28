import React from 'react'
import { Link } from "react-router-dom";

import '../../styles/car-card.css'

const CarCard = (props) => {
  const { vehicle, photos } = props.item;

  return (
    <div className='car-card'>
      <img src={photos[0].url} className='car-img' />
      <div className="car-brand">
        <img src={photos[1].url} className='car-brand-logo' />
        {vehicle.brand}
      </div>
      <div className="car-details">
        <div className="car-info">
          <h3>{vehicle.model} - {vehicle.year}</h3>
          <p>R$ {vehicle.amount}</p>
        </div>
        <div className="car-button">

          <Link to={`/cars/${vehicle.model}`}>Details</Link>
        </div>
      </div>
    </div>
  )
}

export default CarCard;

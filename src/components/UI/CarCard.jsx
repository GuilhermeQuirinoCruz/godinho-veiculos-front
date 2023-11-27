import React from 'react'
import '../../styles/car-card.css'

const CarCard = (props) => {
  const { brandName, brandLogo, carImg, model, year, price } = props.item;

  return (
    <div className='car-card'>
      <img src={carImg} className='car-img' />
      <div className="car-brand">
        <img src={brandLogo} className='car-brand-logo' />
        {brandName}
      </div>
      <div className="car-details">
        <div className="car-info">
          <h3>{model} - {year}</h3>
          <p>R$ {price}</p>
        </div>
        <div className="car-button">
          <input type="button" value="Ver mais" />
        </div>
      </div>
    </div>
  )
}

export default CarCard;

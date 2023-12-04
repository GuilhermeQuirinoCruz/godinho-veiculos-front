import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero__slider">
      {
        [1, 2, 3].map((index) => (
          <div className={`slider__item slider__item-0${index} mt0`}>
            <Container>
              <div className="slider__content ">
                <h4 className="text-light mb-3">Seu próximo carro está aqui</h4>
                <h1 className="text-light mb-4">Confira agora nosso estoque!</h1>
              </div>
            </Container>
          </div>
        ))
      }
    </Slider>
  );
};

export default HeroSlider;

import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const avaliacoes = [
    {
      nome: "Rodrigo S.",
      mensagem: "Encontrei meu carro perfeito na Godinho Veículos. A equipe foi extremamente prestativa, tornando todo o processo fácil e eficiente. Recomendo a todos os que buscam qualidade.",
      img: ava01,
    },
    {
      nome: "Carla M.",
      mensagem: "Minha experiência na Godinho Veículos foi incrível! Encontrei o carro dos meus sonhos com facilidade, e a equipe foi extremamente atenciosa. Recomendo a todos!",
      img: ava02,
    },
    {
      nome: "Marcelo G.",
      mensagem: "Adquiri meu veículo na Godinho e estou muito satisfeito. Processo transparente, carros de qualidade e um excelente atendimento. Recomendo a todos os compradores",
      img: ava03,
    },
    {
      nome: "Amanda R.",
      mensagem: "Godinho Veículos superou minhas expectativas. Encontrei um carro perfeito, e a equipe fez todo o processo ser fácil e rápido. Estou muito feliz com minha compra!",
      img: ava04,
    },
  ];

  return (
    <Slider {...settings}>
      {avaliacoes.map((avaliacao, index) => (
        <div className="testimonial py-4 px-3" key={index}>
          <p className="section__description">
            {avaliacao.mensagem}
          </p>

          <div className="mt-3 d-flex align-items-center gap-4">
            <img src={avaliacao.img} alt="" className="w-25 h-25 rounded-2" />

            <div>
              <h6 className="mb-0 mt-3">{avaliacao.nome}</h6>
              <p className="section__description">Cliente</p>
            </div>
          </div>
        </div>
      ))
      }
    </Slider>
  );
};

export default Testimonial;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import carInfo from "../assets/data/ourCar";
import CarCard from "../components/UI/CarCard";
import axios from "axios";


const CarListing = () => {




  // useEffect(() => {
  //   axios.get('/v1/company/menubook-by-id').then(response => setCategorias(response.data)).catch((error) => {
  //     console.log(error);

  //   });


  // }, []);




  return (
    <Helmet title="Cars">

      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>

            {carInfo.map((item) => {
              <CarItem item={item} key={item.id}></CarItem>
              console.log(item)
            })

            }

            {/* 
            <div>
              {
                categorias.map((item, index) => {
                  item.categorys.map((cat, index) => {
                    cat.items.map((car, index) => {
                      <CarItem item={car} key={car.id}></CarItem>
                      console.log(car)
                    });


                  })
                })
                
              }

            </div> */}

          </Row>
        </Container>
      </section>
    </Helmet >
  );
};

export default CarListing;

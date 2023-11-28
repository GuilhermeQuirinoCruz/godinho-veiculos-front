import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import carInfo from "../assets/data/ourCar";
import CarCard from "../components/UI/CarCard";
import axios from "axios";


const CarListing = () => {
  const [categorias, setCategorias] = useState([]);

  async function handleCategorias() {



  }




  return (
    <Helmet title="Cars">

      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>


            <div>



            </div>
            <div>
              {carInfo.map((item) => {
                return (
                  <CarItem item={item} key={item.id} />

                )
              })}

            </div>







          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;

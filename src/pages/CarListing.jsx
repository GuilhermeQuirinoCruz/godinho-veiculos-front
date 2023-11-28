import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import carInfo from "../assets/data/ourCar";
import axios from "axios";

const CarListing = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint using Axios
    axios.get('/v1/company/menubook-by-id')
      .then(response => {
        setData(response.data);


      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
            {/* {
              carInfo.map((item) => (
                <CarItem item={item} key={item.id} />
              ))
            } */}
            {
              data.map((data, brandIndex) => (
                // Loop through cars within each brand
                data.categorys.map((brands, brandsIndex) => (
                  brands.items.map((cars, brandsIndex) => (
                    <CarItem item={cars} key={cars.id}></CarItem>

                  ))


                ))

              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;


import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BG1 from "../assets/Backgound_images/bg1.png";
import BG2 from "../assets/Backgound_images/bg2.png";
import BG3 from "../assets/Backgound_images/bg3.png";
import BG4 from "../assets/Backgound_images/bg4.png";
import BG5 from "../assets/Backgound_images/bg5.png";
import BG6 from "../assets/Backgound_images/bg6.png";
import lower from "../assets/Backgound_images/home-lower-image.png";
import { Button, Row, Col } from "react-bootstrap";
import { Product } from "../components/Products";

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* Add your Carousel items here */}
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG3}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG5}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={BG6}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid">
        <img src={lower} alt="Lower" className="img-fluid" />
      </div>
      <Product />
    </div>
  );
};

export default HomePage;

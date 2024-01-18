import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MB from "../assets/mobile-home.jpg";
import BG1 from "../assets/Backgound_images/bg1.png";
import BG2 from "../assets/Backgound_images/bg2.png";
import BG3 from "../assets/Backgound_images/bg3.png";
import BG4 from "../assets/Backgound_images/bg4.png";
import BG5 from "../assets/Backgound_images/bg5.png";
import BG6 from "../assets/Backgound_images/bg6.png";
import lower from "../assets/Backgound_images/home-lower-image.png";
import { useMediaQuery } from "react-responsive";
import { Product } from "../components/Products";

const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container-fluid">
      {isMobile ? (
        <img
          className="d-block w-100 img-fluid aspect-ratio"
          src={MB}
          alt="First slide"
        />
      ) : (
        <Carousel >
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG4}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG5}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid aspect-ratio"
              src={BG6}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      )}

      {/* Lower Image */}
      <div className="container-fluid">
        <img src={lower} alt="Lower" className="img-fluid aspect-ratio-lower" />
      </div>

      {/* Product component */}
      <Product />

      
    </div>
  );
};

export default HomePage;

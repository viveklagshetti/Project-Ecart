import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { BoxIcon } from 'react-boxicons';
// import 'react-boxicons/dist/boxicons/css/boxicons.min.css'; // Import Boxicons CSS

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="/" className="me-4 text-reset">
            <box-icon type="logo" name="facebook"></box-icon>
          </a>
          <a href="/" className="me-4 text-reset">
            <box-icon type="logo" name="twitter"></box-icon>
          </a>
          <a href="/" className="me-4 text-reset">
            <box-icon type="logo" name="google"></box-icon>
          </a>
          <a href="/" className="me-4 text-reset">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
        </div>
      </section>

      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <BoxIcon name="gem" color="#6b6b6b" className="me-3" /> */}
                Ecart
              </h6>
              <p>
                Welcome to Ecart, your one-stop destination for an unparalleled
                online shopping experience. Discover a diverse range of
                high-quality products, from trendy fashion and stylish
                accessories to cutting-edge electronics and exquisite jewelry.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 ">Products</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Men's Clothing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Women's Clothing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Electronics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Jewelary
                </a>
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                India, Maharashtra, Solapur - 41005
              </p>
              <p>
                info@example.com
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright: 
        <a className="text-reset fw-bold text-decoration-none" href="https://mdbootstrap.com/">
          Ecart.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;

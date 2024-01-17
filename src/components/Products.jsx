import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

//Redux imports statements
import { addCart, fetchAllProducts } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

//Toast container Imports statements
import { ToastContainer, toast } from "react-toastify"; //Toast container
import "react-toastify/dist/ReactToastify.css"; // Toast container CSS

export const Product = () => {
  //UseState use
  const [error, setErrorText] = useState(""); //Handling errors
  const [loading, setLoading] = useState(false); //Loading before the database

  //redux methods
  const dispatch = useDispatch(); //middleware to connect with action and counter
  const allProduct = useSelector(
    (state) => state.fetchAllProductReducer.products //storing all product Data
  );

  useEffect(() => {
    setLoading(true);
    console.log("Dispatching fetchAllProducts...");
    // Fetch all products and update the Redux store
    dispatch(fetchAllProducts())
      .then((response) => {
        console.log("fetchAllProducts response:", response);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
        setErrorText("No Data Found");
      });
  }, []);

  //FEATURE 1 :- Adding product in the category to store the addProductToCart Function

  const handleAddProductToCart = (singleProduct) => {
    dispatch(addCart(singleProduct));
  };

  //FEATURE 2 :- Filter the Product with similar Category
  const [filter, setFilterData] = useState(allProduct); //Filtering the Data with category wise

  const filterProduct = (cat) => {
    const updatedList = allProduct.filter((x) => x.category === cat);
    setFilterData(updatedList);
  };

  //Loading Component starts
  const Loading = () => {
    return (
      <div>
        <div className="container text-center">
          <Row className="justify-content-center">
            <Col className="col-md-2  mt-3 mb-3">
              <Skeleton height={50} width={200} />
            </Col>
            <Col className="col-md-2  mt-3 mb-3">
              <Skeleton height={50} width={200} />
            </Col>
            <Col className="col-md-2 mt-3 mb-3">
              <Skeleton height={50} width={200} />
            </Col>
            <Col className="col-md-2 mt-3 mb-3">
              <Skeleton height={50} width={200} />
            </Col>
          </Row>
        </div>
        <Row>
          <Col className="col-md-3">
            <Skeleton height={300} width={300} />
            <Skeleton height={100} width={300} />
            <Skeleton height={40} width={300} />
          </Col>
          <Col className="col-md-3">
            <Skeleton height={300} width={300} />
            <Skeleton height={100} width={300} />
            <Skeleton height={40} width={300} />
          </Col>
          <Col className="col-md-3">
            <Skeleton height={300} width={300} />
            <Skeleton height={100} width={300} />
            <Skeleton height={40} width={300} />
          </Col>
          <Col className="col-md-3">
            <Skeleton height={300} width={300} />
            <Skeleton height={100} width={300} />
            <Skeleton height={40} width={300} />
          </Col>
        </Row>
      </div>
    );
  };
  //Loading component ends

  //Displaying the all product data in the card Formate
  const ShowProducts = () => {
    return (
      <>
        <div className="container text-center m-4">
          <Button
            variant="outline-dark"
            className="me-2"
            style={{
              borderRadius: "6px",
              padding: "8px 20px",
              margin: "10px 10px",
            }}
            onClick={() => {
              setFilterData(allProduct);
            }}
          >
            All
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            style={{
              borderRadius: "6px",
              padding: "8px 20px",
              margin: "10px 10px",
            }}
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothing
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            style={{
              borderRadius: "6px",
              padding: "8px 20px",
              margin: "10px 10px",
            }}
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothing
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            style={{
              borderRadius: "6px",
              padding: "8px 20px",
              margin: "10px 10px",
            }}
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronics
          </Button>
          <Button
            variant="outline-dark"
            className="me-2"
            style={{
              borderRadius: "6px",
              padding: "8px 20px",
              margin: "10px 10px",
            }}
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewellery
          </Button>
        </div>
        <Row>
          {filter.map((product, index) => (
            <Col md={3} className="col-md-3 mb-3" key={index}>
              <Card className="container cardBody">
                <Card.Img
                  className="cardImage"
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title className="cardTitle mb-0">
                    {product.title.substring(0, 11)}
                  </Card.Title>
                  <Card.Text
                    className="mb-2"
                    style={{ fontSize: "21px", fontWeight: "500" }}
                  >
                    ${product.price}
                  </Card.Text>
                  <Link to={`/shop/${product.id}`}>
                    <Button variant="outline-dark me-1">Buy Now</Button>
                  </Link>

                  <Button
                    variant="dark"
                    onClick={() => {
                      handleAddProductToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
  };

  //Returning the Main Component
  return (
    <div>
      {/* <ToastContainer> */}
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
      <ToastContainer />
    </div>
  );
};

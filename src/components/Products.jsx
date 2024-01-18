import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

//Redux imports statements
import { addCart, fetchAllProducts } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

//Toast container Imports statements
import { ToastContainer} from "react-toastify"; //Toast container
import "react-toastify/dist/ReactToastify.css"; // Toast container CSS

export const Product = () => {
  //UseState use
  // const [error, setErrorText] = useState(""); //Handling errors
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
        // setErrorText("No Data Found");
      });
  }, [dispatch]);

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
       <div className="container text-center my-4 mx-auto">
        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={2} className="mb-2">
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => {
                setFilterData(allProduct);
              }}
            >
              All
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-2">
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => {
                filterProduct("men's clothing");
              }}
            >
              Men's Clothing
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-2">
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => {
                filterProduct("women's clothing");
              }}
            >
              Women's Clothing
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-2">
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => {
                filterProduct("electronics");
              }}
            >
              Electronics
            </Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="mb-2">
            <Button
              variant="outline-dark"
              className="w-100"
              onClick={() => {
                filterProduct("jewelery");
              }}
            >
              jewelery
            </Button>
          </Col>
        </Row>
      </div>
      <Row xs={1} md={2} lg={3} xl={4} className="g-4 mx-auto">
        {filter.map((product, index) => (
          <Col key={index}>
            <Card className="container cardBody">
              <Card.Img className="cardImage" variant="top" src={product.image} />
              <Card.Body>
                <Card.Title className="cardTitle mb-0">
                  {product.title.substring(0, 11)}
                </Card.Title>
                <Card.Text className="mb-2" style={{ fontSize: "21px", fontWeight: "500" }}>
                  ${product.price}
                </Card.Text>
                <Link to={`/shop/${product.id}`} className="text-decoration-none">
                  <div className="d-grid gap-1 d-md-flex justify-content-md-between mb-1 ">
                    <Button variant="outline-dark">Buy Now</Button>
                    <Button
                      variant="dark"
                      onClick={() => {
                        handleAddProductToCart(product);
                      }}
                      className="ms-md-2"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Link>
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

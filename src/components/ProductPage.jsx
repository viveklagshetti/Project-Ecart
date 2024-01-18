import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap"; //React-Bootstrap Component Import
import Skeleton from "react-loading-skeleton"; //Loading Skeleton Import
import { Link } from "react-router-dom";
import { useCallback } from "react";
//Redux Reducers Import
import { useDispatch, useSelector } from "react-redux";
import { addCart, fetchSingleProduct } from "../redux/action";

//Toast container imports
import { ToastContainer } from "react-toastify"; //Toast container
import "react-toastify/dist/ReactToastify.css"; // Toast container CSS

const ProductPage = () => {
  //UseState use
  const { id } = useParams(); //used to Product store id
  const [loading, setLoading] = useState(false);

  //Redux methods
  const dispatch = useDispatch();

  //Fetching Single Product Data
  const singleProduct = useSelector(
    (state) => state.fetchSingleProductReducer.singleProduct
  );

  //Fetching All Product Data to compare with the category
  const allProduct = useSelector(
    (state) => state.fetchAllProductReducer.products
  );

  //FEATURE 1 :- Add Product in the cart
  const handleAddProductToCart = (singleProduct) => {
    dispatch(addCart(singleProduct));
  };

  //Initialing the fetchSingleProduct method with getProduct method
  const getProduct = useCallback(() => {
    setLoading(true);
    dispatch(fetchSingleProduct(id))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching product:", error);
      });
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct();
  }, [id, getProduct]);

  // Loading when the data is fetching
  const Loading = () => {
    return (
      <div className="container mt-5">
        <Row>
          <div className="col-md-6">
            <Skeleton height={500} width={500}></Skeleton>
          </div>
          <div className="col-md-6">
            <Skeleton height={50} width={300}></Skeleton>
            <Skeleton height={150} width={600}></Skeleton>
            <Skeleton height={50} width={200}></Skeleton>
            <Skeleton height={50} width={200}></Skeleton>
            <Skeleton height={100} width={600}></Skeleton>
            <Skeleton height={50} width={200}></Skeleton>
            <div></div>
          </div>
        </Row>
      </div>
    );
  };

  const LoadingSM = () => {
    return (
      <div>
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

  const [filter, setFilterData] = useState(allProduct); //To filter with the category

  const filterProduct = useCallback(
    (category) => {
      const updatedData = allProduct.filter(
        (product) => product.category === category
      );
      setFilterData(updatedData);
    },
    [allProduct]
  );

  useEffect(() => {
    // If the SingleProduct Data is Present then only the filterProduct will be initialized
    if (singleProduct && singleProduct.category) {
      // Update the similar products when the category changes
      filterProduct(singleProduct.category);
    }
  }, [singleProduct, filterProduct]);

  const SimilarProduct = () => {
    const filteredProducts = filter.filter(
      (product) => product.id !== singleProduct.id
    );
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4 mx-auto">
          {filteredProducts.map((product, index) => (
            <Col key={index} className="mb-3">
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
                  <Link to={`/shop/${product.id}`} className="text-decoration-none">
                  <div className="d-grid gap-2 d-md-flex justify-content-md-between mb-1 ">
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

  const ShowProduct = () => {
    return (
      <div className="container mt-2 mb-5">
        <Row>
          <Col md={6}>
            <img
              className="img-fluid mt-5"
              src={singleProduct.image}
              alt={singleProduct.title}
              style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }}
            />
          </Col>
          <Col md={6} className="">
            <h1
              className="text-uppercase text-black-50 mt-5"
              style={{ fontFamily: "Poppins" }}
            >
              {singleProduct.category}
            </h1>
            <h1
              className="mt-3 text-black-60"
              style={{ fontFamily: "Open Sans", fontSize: "50px" }}
            >
              {singleProduct.title}
            </h1>
            <h3 className="mt-3" style={{ fontFamily: "Poppins" }}>
              Rating {singleProduct.rating && singleProduct.rating.rate}{" "}
              <span>
                <box-icon
                  name="star"
                  type="solid"
                  color="rgba(253,184,46,0.99)"
                ></box-icon>
              </span>
            </h3>
            <h1
              className="mt-3"
              style={{
                fontFamily: "Open Sans",
                fontSize: "50px",
                fontWeight: "600",
              }}
            >
              ${singleProduct.price}
            </h1>
            <p
              className=""
              style={{
                fontSize: "17px",
                maxWidth: "100%",
                marginBottom: "20px",
              }}
            >
              {singleProduct.description}
            </p>
            <Button variant="dark me-2" className="mb-2 mb-md-0 ">
              Buy Now
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => {
                handleAddProductToCart(singleProduct);
              }}
            >
              Add to Cart
            </Button>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <div className="container mt-3 mb-3">
        <h2>Similar Products</h2>
      </div>
      <div className="container">
        {
          <div className="row">
            {loading ? <LoadingSM /> : <SimilarProduct />}
          </div>
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductPage;

import React, { useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delCart, updateQuantity } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const user = useSelector((state) => state.loginUserReducer.user);
  const navigate = useNavigate();
  //UseEffect use...
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //Redux use
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  //Remove Product Form Cart
  const handleRemove = (productId) => {
    dispatch(delCart(productId));
  };

  //Handle The Product Quantity
  const handleQuantityChange = (productId, newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
    dispatch(updateQuantity(productId, newQuantity));
  };

  //Calculate All product price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0)
      .toFixed(2);
  };

  const handleOrder = () => {
    user ? navigate("/cart") : navigate("/signup");
  };

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <Container className="h-100 py-5">
          <Row className="d-flex justify-content-center align-items-center h-100">
            <Col md={10}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center mt-3 mb-3">
                  <h4>Your cart is empty.</h4>
                </div>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <Card key={item.id} className="rounded-3 mb-4">
                      <Card.Body className="p-4">
                        <Row className="d-flex justify-content-between align-items-center">
                          <Col md={2} lg={2} xl={2}>
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              alt={item.title}
                            />
                          </Col>
                          <Col md={3} lg={3} xl={3}>
                            <p className="lead fw-normal mb-2">{item.title}</p>
                            <p>
                              <span className="text-muted">Category: </span>
                              {item.category}
                            </p>
                            <p>
                              <span className="text-muted">Rating: </span>
                              {item && item.rating.rate}
                            </p>
                          </Col>
                          <Col md={3} lg={3} xl={2} className="d-flex gap-1">
                            <Button
                              variant="outline-dark"
                              onClick={() =>
                                handleQuantityChange(item.id, item.qty - 1)
                              }
                            >
                              -
                            </Button>
                            <input
                              type="number"
                              value={item.qty}
                              onChange={(e) =>
                                handleQuantityChange(
                                  item.id,
                                  parseInt(e.target.value, 10)
                                )
                              }
                              className="form-control form-control-sm"
                            />
                            <Button
                              variant="dark"
                              onClick={() =>
                                handleQuantityChange(item.id, item.qty + 1)
                              }
                            >
                              +
                            </Button>
                          </Col>
                          <Col md={3} lg={2} xl={2} className="offset-lg-1">
                            <h5 className="mb-0">${item.price}</h5>
                          </Col>
                          <Col md={1} lg={1} xl={1} className="text-end">
                            <Button
                              variant="danger"
                              onClick={() => handleRemove(item.id)}
                            >
                              <box-icon name="trash"></box-icon>
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))}

                  <Card>
                    <Card.Body>
                      <Row className="d-flex justify-content-end">
                        <Col className="text-start float-right">
                          <h4>Total: ${calculateTotal()}</h4>

                          <Button
                            variant="dark"
                            className="btn-block btn-lg float-end"
                            onClick={() => handleOrder()}
                          >
                            Confirm Order
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </>
  );
};

export default Cart;

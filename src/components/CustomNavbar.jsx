import React, { useState } from "react";
import { Button, Navbar, Container, Nav, Form, Toast } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/action";
import { clearCart } from "../redux/action";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart);
  const user = useSelector((state) => state.loginUserReducer.user);

  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  const handleLogout = () => {
    toggleToast();
    dispatch(userLogout(user));
    dispatch(clearCart());
    toast.dark("Logout Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    navigate("/login");
  };

  const closeNavbarToggle = () => {
    // Close the navbar toggle
    document.getElementById("navbar-toggler").click();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow fixed-top">
      <Container fluid className="container-fluid">
        <Navbar.Brand
          onClick={() => {
            navigate("/");
            closeNavbarToggle();
          }}
          className="ms-3"
        >
          <box-icon name="cube-alt" size="lg"></box-icon>
        </Navbar.Brand>
        <Navbar.Toggle id="navbar-toggler" aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          onSelect={closeNavbarToggle} // Close the toggle when a link is clicked
        >
          <Nav
            className="navbarItems my-auto my-1 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              className="me-3"
              onClick={() => {
                closeNavbarToggle();
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="me-3"
              onClick={() => {
                closeNavbarToggle();
                navigate("/shop");
              }}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              className="me-3"
              onClick={() => {
                closeNavbarToggle();
                navigate("/products");
              }}
            >
              Products
            </Nav.Link>
            <Nav.Link
              className="me-3"
              onClick={() => {
                closeNavbarToggle();
                navigate("/about-us");
              }}
            >
              About Us
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-auto me-3">
            <span className="searchIcon">
              <box-icon name="search"></box-icon>
            </span>
            <Form.Control
              type="search"
              placeholder="Search for Products"
              className="me-2 searchBar"
              aria-label="Search"
            />
          </Form>
          <Nav.Link className="me-3" onClick={toggleToast}>
            <box-icon name="user"></box-icon>
          </Nav.Link>
          <Nav.Link href="#action2" className="me-4">
            <span onClick={() => navigate("/cart")}>
              <box-icon name="shopping-bag"></box-icon>
              {cartItems.length > 0 && <span>({cartItems.length})</span>}
            </span>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>

      {/* Toast component */}
      <Toast
        show={showToast}
        onClose={toggleToast}
        style={{
          position: "fixed",
          top: "10vh",
          right: "10vw",
          zIndex: 1,
          width: "250px",
        }}
      >
        <Toast.Header>
          {user ? (
            <strong className="me-auto">Welcome {user.name}</strong>
          ) : (
            <strong className="me-auto">Welcome</strong>
          )}
        </Toast.Header>

        <Toast.Body>
          {user ? (
            <span>
              <Button
                variant="dark"
                onClick={() => {
                  closeNavbarToggle();
                  handleLogout();
                }}
                name="Logout"
              >
                Logout
              </Button>
            </span>
          ) : (
            <>
              <span onClick={() => navigate("/login")}>
                <Button
                  variant="dark"
                  onClick={() => {
                    closeNavbarToggle();
                    toggleToast();
                  }}
                  name="Login"
                >
                  Login
                </Button>
              </span>

              <span onClick={() => navigate("/signup")}>
                <Button
                  variant="dark ms-2"
                  onClick={() => {
                    closeNavbarToggle();
                    toggleToast();
                  }}
                  name=" SignUp"
                >
                  Sign Up
                </Button>
              </span>
            </>
          )}
        </Toast.Body>
      </Toast>
    </Navbar>
  );
};

export default CustomNavbar;

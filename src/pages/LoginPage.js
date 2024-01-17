import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../redux/action";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    // Check if email or password is empty
    if (!email || !password) {
      toast.warning("Please provide both email and password!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    try {
      await dispatch(loginUser(email, password));
      toast.dark("Login Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Login Failed", error?.message);
      toast.error("Login Failed!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section>
      <div className="container d-flex justify-content-center">
        <div className="border col-md-6 mt-5 p-5 ">
          <div className="text-center">
            <span style={{ fontSize: "30px" }}>Login</span>
          </div>
          <Form className=" p-5" onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-around align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label className="form-check-label" htmlFor="form1Example3">
                  Show Password
                </label>
              </div>
              <a href="#!" style={{ textDecoration: "none" }}>
                Forgot password?
              </a>
            </div>
            <Button variant="dark" type="submit">
              Log In
            </Button>
          </Form>
          <div className="text-center" style={{}}>
            <a
              href="/signup"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              Create new Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;

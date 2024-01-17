import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userAdd } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userAddState = useSelector((state) => state.userAddReducer);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAccount = (event) => {
    event.preventDefault();

    try {
      dispatch(userAdd(userEmail, userPassword, userName));
      toast.success("Regsitered Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      navigate("/login");
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

  // useEffect(() => {
  //   if (userAddState.user) {
  //     setShowSuccessMessage(true);

  //     // Set a timeout to hide the success message after 1 second
  //     setTimeout(() => {
  //       setShowSuccessMessage(false);
  //       navigate("/login");
  //     }, 2000);
  //   }
  // }, [userAddState.user, navigate]);

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            {userAddState.error && (
              <Alert variant="danger">
                Error: {userAddState.error.message}
              </Alert>
            )}
            {showSuccessMessage && (
              <Alert variant="success">User added successfully!</Alert>
            )}
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleAccount}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={userName}
                            onChange={(event) =>
                              setUserName(event.target.value)
                            }
                            placeholder=" Your Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={userEmail}
                            onChange={(event) =>
                              setUserEmail(event.target.value)
                            }
                            placeholder="Your Email"
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            value={userPassword}
                            placeholder="Password"
                            onChange={(event) =>
                              setUserPassword(event.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          checked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!" style={{ textDecoration: "none" }}>
                            Terms of service
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Button
                          type="submit"
                          variant="outline-dark"
                          className="btn-lg"
                        >
                          Register
                        </Button>
                      </div>
                      <div className="text-center" style={{}}>
                        <a
                          href="/login"
                          style={{ textDecoration: "none", fontSize: "18px" }}
                        >
                          If Account Exists, Log in to your account
                        </a>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                    
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;

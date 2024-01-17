import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import ProductPage from "./components/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import { ToastContainer, toast } from "react-toastify"; //Toast container
import "react-toastify/dist/ReactToastify.css"; // Toast container CSS

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomNavbar />
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/shop" Component={ShopPage} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/cart" Component={CartPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignUpPage} />
          <Route path="/cart" component={CartPage}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

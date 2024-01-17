import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Product } from "../components/Products";
const ShopPage = () => {
  return (
    <div>
      <Product />
    </div>
  );
};
export default ShopPage;

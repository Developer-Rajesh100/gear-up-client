import React, { useEffect, useState } from "react";
import Product from "../AllProducts/Product/product";
import "./AllProducts.css";

const AllProducts = () => {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div className="all-details-section">
      <div>
        <h1 className="my-5 title">
          <u>All Products</u>
        </h1>

        <div className="cart-con-parent">
          <div className="container row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 cart-con">
            {Cart.map((cart) => (
              <Product key={cart._id} cart={cart}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

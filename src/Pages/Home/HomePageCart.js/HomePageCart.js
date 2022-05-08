import React, { useEffect, useState } from "react";
import HomeCart from "./HomeCart/HomeCart";
import "./HomePageCart.css";
const HomePageCart = () => {
  const [Cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  return (
    <div>
      <div className="hr-container my-5">
        <hr className="hr" />
      </div>
      <h1 className="my-5 title">
        <u>Products</u>
      </h1>

      <div className="cart-con-parent">
        <div className="container row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 cart-con">
          {Cart.map((cart) => (
            <HomeCart key={cart._id} cart={cart}></HomeCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCart;

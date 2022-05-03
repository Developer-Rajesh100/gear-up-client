import React, { useEffect, useState } from "react";
import "./HomeCart.css";
const HomeCart = ({ cart }) => {
  return (
    <div>
      <div key={cart.id}>
        <div className="cart">
          <img src={cart.image} alt="" />
          <p>
            <strong>{cart.name}</strong>
            <br />
            <small className="product-description">
              Description: {cart.description}
            </small>
            <br />
            <strong>Price: </strong>
            <i>${cart.price}</i>
            <br />
            <strong>Quantity: </strong>
            <i>{cart.quantity}</i>
            <br />
            <strong> Dealer: </strong>
            <i>{cart.dealer}</i>
          </p>
          <button className="btn">Update</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;

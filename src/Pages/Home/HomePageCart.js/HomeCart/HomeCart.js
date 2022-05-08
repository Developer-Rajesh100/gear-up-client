import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCart.css";
const HomeCart = ({ cart }) => {
  const { _id, image, name, description, price, quantity, dealer } = cart;
  const navigate = useNavigate();
  const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };
  return (
    <div>
      <div key={cart._id}>
        <div className="cart shadow-lg">
          <img src={image} alt="" />
          <p>
            <strong>{name}</strong>
            <br />
            <small className="product-description">
              <strong>Description:</strong> {description}
            </small>
            <br />
            <strong>Price: </strong>
            <i>${price}</i>
            <br />
            <strong>Quantity: </strong>
            <i>{quantity}</i>
            <br />
            <strong> Dealer: </strong>
            <i>{dealer}</i>
          </p>
          <button onClick={() => navigateToProductDetails(_id)} className="btn">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCart;

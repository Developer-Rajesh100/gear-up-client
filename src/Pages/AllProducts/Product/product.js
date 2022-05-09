import React from "react";
import "./Product.css";
const product = ({ cart }) => {
  const { _id, image, name, description, price, quantity, dealer } = cart;

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
          <button className="mb-3 delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default product;

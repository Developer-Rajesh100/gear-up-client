import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  ////

  const { quantityUpdate, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  ////
  const { productdetailsId } = useParams();
  const [Product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${productdetailsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { image, name, description, price, quantity, dealer } = Product;
  return (
    <div className="d-flex justify-content-center">
      <div className="producr-details-cart shadow-lg">
        <img src={image} alt="" />
        <h3>
          {" "}
          <b>{name}</b>{" "}
        </h3>
        <p>
          {" "}
          <b>Description: </b> <i>{description}</i>
        </p>
        <p>
          {" "}
          <b>Price: </b> $<i>{price}</i>
        </p>
        <p>
          {" "}
          <b>Quantity: </b> <i>{quantity}</i>
        </p>
        <p>
          {" "}
          <b>Dealer: </b> <i>{dealer}</i>
        </p>
        <div>
          <button className="my-4 deleverd-btn">Deleverd</button>
          <br />
          <form
            className="d-flex justify-content-center mb-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="form-control w-50 me-3"
              type="number"
              name="number"
              id="number"
              {...quantityUpdate("number")}
            />
            <input
              className="ms-2 add-product-btn"
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import product from "../AllProducts/Product/product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productdetailsId } = useParams();
  const [Product, setProduct] = useState({});
  const { image, name, description, price, quantity, dealer } = Product;
  useEffect(() => {
    const url = `https://warm-caverns-95911.herokuapp.com/product/${productdetailsId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productdetailsId]);

  //ADD QUENTITY
  const handleQuentity = (event) => {
    event.preventDefault();
    const stock = event.target.quantity.value;
    console.log(stock);
    if (stock) {
      const stockQuantity = parseInt(quantity) + parseInt(stock);
      console.log(stockQuantity);

      const url = `https://warm-caverns-95911.herokuapp.com/product/${productdetailsId}`;
      console.log(url);
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ stockQuantity }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setProduct({ ...Product, quantity: stockQuantity });
          toast("Stock Succesfully");
        });
    }
  };
  //Delever
  let decrease = parseInt(quantity);

  const handleDelever = (product) => {
    // const newQuantity = (decrease -= 1);
    const newQuantity = (product.quantity -= 1);
    console.log(newQuantity);
    const url = `https://warm-caverns-95911.herokuapp.com/pd/${productdetailsId}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProduct({ ...product, quantity: newQuantity });
        toast("Delever Succesfully");
      });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="producr-details-cart shadow-lg">
        <img src={image} alt="" />
        <h3>
          {" "}
          <b>{name}</b>{" "}
        </h3>
        <p className="px-5">
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
          <button
            onClick={() => handleDelever(Product)}
            className="my-4 deleverd-btn"
          >
            Deleverd
          </button>
          <br />

          <form onSubmit={handleQuentity}>
            <input
              className="inp-field mb-3"
              type="number"
              name="quantity"
              id=""
              placeholder="Quantity"
            />
            <input
              className="btn bg-primary text-white w-25 ms-3"
              type="submit"
              value="Restock"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

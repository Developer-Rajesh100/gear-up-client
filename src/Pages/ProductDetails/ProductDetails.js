import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import product from "../AllProducts/Product/product";
import "./ProductDetails.css";

const ProductDetails = () => {
  ////

  // const { quantityUpdate, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  /*
  //DELEVER
  const handleDelever = (product) => {
    const newQuentity = parseInt(product.quantity) - 1;
    fetch(
      `https://warm-caverns-95911.herokuapp.com/product/${productdetailsId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ newQuentity }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProduct({ ...product, quantity, newQuentity });
        toast("Deleverd");
      });
  };
*/
  ////
  const { productdetailsId } = useParams();
  const [Product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://warm-caverns-95911.herokuapp.com/product/${productdetailsId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productdetailsId]);
  const { image, name, description, price, quantity, dealer } = Product;
  //ADD QUENTITY
  const handleQuentity = (event) => {
    event.preventDefault();
    ////Raj
    const stock = event.target.quantity.value;
    console.log(stock);
    if (stock) {
      const stockQuantity = parseInt(quantity) + parseInt(stock);
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
          setProduct({ ...product, quantity, stockQuantity });
          toast("Stock Succesfully");
        });
    }
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
          <button className="my-4 deleverd-btn">Deleverd</button>
          <br />
          {/* <form
            onSubmit={() => handleQuentity()}
            className="d-flex justify-content-center mb-3"
          >
            <input
              className="form-control w-50 me-3"
              type="number"
              name="quantity"
              id="number"
            />
            <input
              className="ms-2 add-product-btn"
              type="submit"
              value="Add Product"
            />
          </form> */}
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

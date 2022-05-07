import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productdetailsId } = useParams();
  // const [Product, setProduct] = useState;
  // useEffect(() => {
  //   fetch("CartData.json")
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data));
  // }, []);
  return (
    <div className="mt-5">
      <h1>Welcome to Product Details!!! {productdetailsId} </h1>
    </div>
  );
};

export default ProductDetails;

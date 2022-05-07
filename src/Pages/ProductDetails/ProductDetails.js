import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productdetailsId } = useParams();
  return (
    <div className="mt-5">
      <h1>Welcome to Product Details!!! {productdetailsId} </h1>
    </div>
  );
};

export default ProductDetails;

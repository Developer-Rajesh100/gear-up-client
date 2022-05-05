import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productdetailsId } = useParams();
  return (
    <div>
      <h1>Welcome to Product Details!!! </h1>
    </div>
  );
};

export default ProductDetails;

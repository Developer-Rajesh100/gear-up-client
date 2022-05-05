import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import TouringBikes from "../Tourung Bikes/TouringBikes";
import Banner from "./Banner/Banner";
import HomePageCart from "./HomePageCart.js/HomePageCart";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div id="products">
        <HomePageCart></HomePageCart>
        <TouringBikes></TouringBikes>
        {/* <ProductDetails></ProductDetails> */}
      </div>
    </div>
  );
};

export default Home;

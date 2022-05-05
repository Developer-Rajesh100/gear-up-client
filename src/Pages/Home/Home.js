import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import TouringBikes from "../Tourung Bikes/TouringBikes";
import Banner from "./Banner/Banner";
import HomePageCart from "./HomePageCart.js/HomePageCart";
import RidersPhoto from "./Riders Photos/RidersPhoto";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div id="products">
        <HomePageCart></HomePageCart>
        <TouringBikes></TouringBikes>
        <RidersPhoto></RidersPhoto>
        {/* <ProductDetails></ProductDetails> */}
      </div>
    </div>
  );
};

export default Home;

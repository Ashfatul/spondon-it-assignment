import React from "react";
import mainImage from "../../assets/main image.png";

export default function HeroSection() {
   return (
      <div className="container row mx-auto">
         <div className="col-md-7">
            <h1 className="hero-text">
               We have developed{" "}
               <span className="hero-text-highlight-1">incredible</span> tools
               to make your life{" "}
               <span className="hero-text-highlight-2">easier.</span>
            </h1>

            <button className="view-products-btn">View Products</button>
         </div>
         <div className="col-md-5 hero-section-image">
            <img src={mainImage} alt="" className="w-100" />
         </div>
      </div>
   );
}

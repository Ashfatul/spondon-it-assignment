import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";

export default function Client() {
   let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      //   prevArrow: <button className="slick-prev">Previous</button>,
      //   nextArrow: <button className="slick-next">Next</button>,
   };
   return (
      <div className="slider-container">
         <h4 className="text-center client-list-title bg-transparent">
            Brand Who Trust Aorasoft
         </h4>
         <Slider {...settings} className="container">
            <div className="single-client d-flex justify-content-center">
               <img src={client1} alt="" />
            </div>

            <div className="single-client d-flex justify-content-center">
               <img src={client2} alt="" />
            </div>

            <div className="single-client d-flex justify-content-center">
               <img src={client3} alt="" />
            </div>

            <div className="single-client d-flex justify-content-center">
               <img src={client4} alt="" />
            </div>

            <div className="single-client d-flex justify-content-center">
               <img src={client1} alt="" />
            </div>
         </Slider>
      </div>
   );
}

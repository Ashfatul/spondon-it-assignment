import React from "react";
import cashImage from "../../assets/cash-vector.png";
import visa from "../../assets/Visa.png";
import masterCard from "../../assets/Mastercard.png";
import discover from "../../assets/Discover.png";
import americanExpress from "../../assets/Amex.png";
import jcb from "../../assets/JCB.png";

export default function PaymentGateway() {
   return (
      <div className="row mx-0 container-fluid padding-container">
         <div className="col-md-7"></div>
         <div className="col-md-5">
            <div className="payment-gateway-container">
               <div className="payment-gateway-card">
                  <div className="card-list-header">
                     <img
                        src={cashImage}
                        alt=""
                        className="card-list-header-img"
                     />

                     <div className="card-image-container d-flex flex-wrap">
                        <img src={visa} alt="" className="mt-2 mt-md tk500" />
                        <img
                           src={masterCard}
                           alt=""
                           className="mt-2 mt-md tk500"
                        />
                        <img
                           src={discover}
                           alt=""
                           className="mt-2 mt-md tk500"
                        />
                        <img
                           src={americanExpress}
                           alt=""
                           className=" mt-2 mt-md tk500"
                        />
                        <img src={jcb} alt="" className="mt-md-2 m2-0" />
                     </div>
                  </div>

                  <p className="card-support">
                     * Almost every card supports entire the world
                  </p>

                  <div className="card-info">
                     <h3>30+ International Payment Gateways Support</h3>
                     <p>
                        Manage your eCommerce self managed or multi vendor with
                        huge features like amazon, daraz, rich vendor or
                        merchant feature, central product management system with
                        lots of cool features included.
                     </p>

                     <div className="more-info-btn">More Details</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

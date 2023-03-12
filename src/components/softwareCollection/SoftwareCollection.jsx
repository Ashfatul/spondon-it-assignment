import React from "react";
import vault from "../../assets/softwareVault.png";
import man from "../../assets/manwithmike.png";

export default function SoftwareCollection() {
   return (
      <div className="margin-left software-collection-section">
         <div className="row m-0 align-items-center">
            <div className="col-md-2 text-center">
               <img src={vault} alt="" className="vault-image" />
            </div>
            <div className="col-md-5 software-collection-info">
               <h4>We have Huge Software Collection</h4>
               <p>
                  Explore from our product librery, 233+ premium product there
               </p>
            </div>
            <div className="col-md-3 mx-auto">
               <button className="view-all-btn">View All</button>
            </div>
            <div>
               <img src={man} alt="" className="man-with-mike col-md-2" />
            </div>
         </div>
      </div>
   );
}

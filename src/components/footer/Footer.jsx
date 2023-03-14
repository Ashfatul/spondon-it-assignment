import React from "react";
import phone from "../../assets/phone.png";
import envelope from "../../assets/envelope.png";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

import payPal from "../../assets/PayPal.png";
import googlePay from "../../assets/Google Pay.png";
import ApplePay from "../../assets/ApplePay.png";
import stripe from "../../assets/Stripe.png";
import MasterCard2 from "../../assets/MasterCard2.png";
import jcb2 from "../../assets/JCB2.png";
import discover2 from "../../assets/Discover2.png";
import visa2 from "../../assets/Visa2.png";

export default function Footer() {
   return (
      <footer className="margin-right row mx-0 margin-right">
         <div className="col-md-5">
            <div className="footer-section-title">About Us</div>
            <div className="about-company">
               Spondonit have been launched in 2008 to serve the IT related
               services. We deliver top class services.
            </div>

            <div className="row contact-info-row">
               <div className="col-md-6 phone">
                  <img src={phone} alt="icon" />
                  +2 810 854-36-79
               </div>
               <div className="col-md-6 email">
                  <img src={envelope} alt="icon" />
                  support@spondon.com
               </div>
            </div>

            <div className="d-grid footer-payment-method">
               <div className="item">
                  <img src={payPal} alt="card icon" />
               </div>
               <div className="item">
                  <img src={googlePay} alt="" className="" />
               </div>
               <div className="item">
                  <img src={ApplePay} alt="" />
               </div>
               <div className="item">
                  <img src={stripe} alt="" />
               </div>

               <div className="item">
                  <img src={MasterCard2} alt="" />
               </div>

               <div className="item">
                  <img src={jcb2} alt="" />
               </div>

               <div className="item">
                  <img src={discover2} alt="" />
               </div>

               <div className="item">
                  <img src={visa2} alt="" />
               </div>
            </div>
         </div>
         <div className="col-md-2">
            <div className="footer-section-title">Support Zone</div>

            <div className="support-zone-links">
               <ul>
                  <li>
                     <a href="/unlock">Unlock Your Potential</a>
                  </li>
                  <li>
                     <a href="/privacy">Privacy policy and cookie policy</a>
                  </li>
                  <li>
                     <a href="/sitemap">Sitemap</a>
                  </li>
                  <li>
                     <a href="/courses">Featured Courses</a>
                  </li>
                  <li>
                     <a href="/join-us">Join Us</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-md-2">
            <div className="footer-section-title">Quick Link</div>

            <div className="quick-link-links">
               <ul>
                  <li>
                     <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>
                     <a href="/blog">Blog</a>
                  </li>
                  <li>
                     <a href="/help-and-support">Help and Support</a>
                  </li>
                  <li>
                     <a href="/affiliate">Affiliate</a>
                  </li>
                  <li>
                     <a href="/terms">Terms</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="col-md-3">
            <div className="footer-section-title">Subscribe</div>
            <div className="subscribe-form-container">
               <input type="text" placeholder="Enter your email" />
               <button>Go!</button>
            </div>

            <div className="no-spam">*Don’t Worry We Hate Spam</div>

            <div className="footer-section-title follow-us-title">
               Follow Us on
            </div>

            <div className="social-media-container">
               <div className="item">
                  <img src={facebook} alt="" />
               </div>
               <div className="item">
                  <img src={twitter} alt="" />
               </div>
               <div className="item">
                  <img src={youtube} alt="" />
               </div>
            </div>
         </div>

         <div className="important-link-and-right">
            <div className="row m-0">
               <div className="col-md-6 right">&copy; All Rights Reserved</div>
               <div className="col-md-6">
                  <ul className="links">
                     <li>
                        <a href="/privacy">Privacy Policy</a>
                     </li>
                     <li>
                        <a href="/terms">Terms of Use</a>
                     </li>
                     <li>
                        <a href="/sales">Sales and Refunds</a>
                     </li>
                     <li>
                        <a href="/legal">Legal</a>
                     </li>
                     <li>
                        <a href="/site-map">Site Map</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
}

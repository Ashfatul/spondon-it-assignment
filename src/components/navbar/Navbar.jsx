import React from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
   return (
      <header className="container bg-transparent">
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="/">
                  <img src={logo} alt="logo" className="top-logo" />
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navBarTop"
                  aria-controls="navBarTop"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse justify-content-end"
                  id="navBarTop"
               >
                  <ul className="navbar-nav me-end mb-2 mb-lg-0 align-items-center">
                     <li className="nav-item px-3">
                        <a
                           className="nav-link active"
                           aria-current="page"
                           href="/"
                        >
                           Home
                        </a>
                     </li>

                     <li className="nav-item px-3">
                        <a className="nav-link" href="/product">
                           Product
                        </a>
                     </li>

                     <li className="nav-item px-3">
                        <a className="nav-link" href="/blog">
                           Blog
                        </a>
                     </li>

                     <li className="nav-item px-3">
                        <a className="nav-link" href="/about">
                           About
                        </a>
                     </li>

                     <li className="nav-item px-3">
                        <a className="nav-link" href="/contact">
                           Contact
                        </a>
                     </li>

                     <li className="nav-item px-3">
                        <button className="login-signup-btn">
                           Login/Signup
                        </button>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

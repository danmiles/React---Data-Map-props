import React from "react";
import "../styles/Navbar.css";
import logo from "/images/airbnb/air-bnb__logo.svg";

function Navbar() {
  return (
    <div className="nav__color">
      <div className="container">
        <nav>
          <img src={logo} className="nav__logo" />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

import "./Header.css";

import logo from "../../images/Logo.svg";

const Header = () => {
   return (
      <div className="header">
         <img src={logo} alt="" />
         <div className="anchor-container">
            <a href="/order">Order</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Menage Inventory</a>
            <a href="/login">Login</a>
         </div>
      </div>
   );
};

export default Header;

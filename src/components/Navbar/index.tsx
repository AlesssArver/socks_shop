import React from "react";
import { Link } from "react-router-dom";

import "./index.sass";

import NavbarCart from "./Cart";
import NavbarCategories from "./Categories";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__block">
        <Link to="/" className="navbar__brand">
          Socks
        </Link>
        <NavbarCategories />
      </div>
      <NavbarCart />
    </div>
  );
};
export default React.memo(Navbar);

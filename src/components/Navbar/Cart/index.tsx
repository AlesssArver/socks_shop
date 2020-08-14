import React from "react";
import { Link } from "react-router-dom";

import CartLogo from "assets/images/cart_logo.svg";

import "./index.sass";

const NavbarCart = () => {
  return (
    <div className="navbar__block navbar__cart__wrapper">
      <Link to="/cart">
        <div className="navbar__cart">
          <img className="navbar__cart__logo" src={CartLogo} alt="корзина" />
          <span className="navbar__cart--price">5 000 руб</span>
        </div>
      </Link>
    </div>
  );
};
export default React.memo(NavbarCart);

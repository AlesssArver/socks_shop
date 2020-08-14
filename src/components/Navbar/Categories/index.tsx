import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./index.sass";

const categories = [
  { href: "for_her", text: "для нее" },
  { href: "for_him", text: "для него" },
];

const NavbarCategories = () => {
  return (
    <ul className="categories__items">
      {categories.map((value, index) => (
        <li className="categories__item" key={value.href}>
          <NavLink
            to={`/goods/${value.href}`}
            activeClassName="categories__item--active"
          >
            {value.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default React.memo(NavbarCategories);

import React from "react";

import "./index.sass";

const headerItems = ["Тел: 8988550002", "Адрес: г.Краснодар ул.Красная 124"];

const Header = () => {
  return (
    <div className="header">
      <ul className="header__items">
        {headerItems.map((item) => (
          <li className="header__item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(Header);

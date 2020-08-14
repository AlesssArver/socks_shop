import React from "react";

import "./index.sass";

import { Filter, Sortby } from "components";

const UnderNav = () => {
  return (
    <div className="undernav">
      <Filter />
      <div>Для нее</div>
      <Sortby />
    </div>
  );
};
export default UnderNav;

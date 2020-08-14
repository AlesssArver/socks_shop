import React, { useState } from "react";

import "./index.sass";

const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="filter__wrapper">
      <div className="filter__open" onClick={() => setOpen(!open)}>
        <span>Фильтр</span>
        <span>+</span>
      </div>
      {open && <div className="filter">Filter</div>}
    </div>
  );
};
export default Filter;

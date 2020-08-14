import React, { useState } from "react";

import "./index.sass";

const items: Array<string> = ["По возрастанию", "По убыванию", "Новые"];

const Sortby = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sortby__wrapper">
      <div className="sortby__open" onClick={() => setOpen(!open)}>
        <span>По возрастанию</span>
        <span>+</span>
      </div>
      {open && (
        <ul className="sortby">
          {items.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Sortby;

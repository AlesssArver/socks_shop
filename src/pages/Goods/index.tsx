import React from "react";
import { Route } from "react-router-dom";

import { UnderNav } from "components";
import { ForHer, ForHim } from "modules/Goods";

const Goods = () => {
  return (
    <div>
      <UnderNav />
      <Route path="/goods/for_her" render={() => <ForHer />} />
      <Route path="/goods/for_him" render={() => <ForHim />} />
    </div>
  );
};
export default Goods;

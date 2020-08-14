import React from "react";

import Good from "assets/images/good1.jpg";

import { Goods } from "components";

type IGoods = {
  img: string;
  title: string;
  price: number;
};

const goods: Array<IGoods> = [
  { img: Good, title: "OFF-WHITE", price: 2000 },
  { img: Good, title: "OFF-WHITE", price: 2000 },
  { img: Good, title: "OFF-WHITE", price: 2000 },
  { img: Good, title: "OFF-WHITE", price: 2000 },
  { img: Good, title: "OFF-WHITE", price: 2000 },
  { img: Good, title: "OFF-WHITE", price: 2000 },
];

const ForHer = () => {
  return <Goods goods={goods} />;
};
export default ForHer;

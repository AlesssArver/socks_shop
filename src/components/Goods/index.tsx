import React, { FC } from "react";

import "./index.sass";

import GoodCard from "./GoodCard";

type IGoods = {
  img: string;
  title: string;
  price: number;
};
type IProps = { goods: Array<IGoods> };

const Goods: FC<IProps> = ({ goods }) => {
  return (
    <div className="goods">
      {goods.map((value) => (
        <GoodCard img={value.img} title={value.title} price={value.price} />
      ))}
    </div>
  );
};
export default Goods;

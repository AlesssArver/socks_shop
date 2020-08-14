import React, { FC } from "react";

import "./index.sass";

type IProps = {
  img: string;
  title: string;
  price: number;
};

const GoodCard: FC<IProps> = ({ img, title, price }) => {
  return (
    <div className="good--card">
      <div className="good--card__image__wrapper">
        <img src={img} alt="good" />
      </div>
      <div className="good--card__content">
        <div className="good--card__title">{title}</div>
        <div className="good--card__price">{price} руб</div>
      </div>
    </div>
  );
};
export default GoodCard;

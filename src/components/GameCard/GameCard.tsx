import React from "react";

export const GameCard = ({ game }: any) => {
  const { genre, image, name, description, price, isNew } = game;

  return (
    <div>
      <div>
        {isNew && <p>New</p>}
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{genre}</p>
        <div>
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

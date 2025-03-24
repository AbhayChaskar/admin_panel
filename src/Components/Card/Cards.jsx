import React from "react";
import Card from "../Card/Card";
import Info from "../../../Api/info.json";

const Cards = () => {
  return (
    <>
      {Info.cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default Cards;

import React, { useState } from "react";
import EmptyCard from "./EmptyCard";
import Card from "./Card";

const SortCards = ({ rowX, rowY, data }) => {
  let cardData = data.filter(function (card) {
    return card.rowX === rowX && card.rowY === rowY;
  });

  return cardData.length > 0 ? (
    <Card cardData={cardData} />
  ) : (
    <EmptyCard rowX={rowX} rowY={rowY} />
  );
};

export default SortCards;

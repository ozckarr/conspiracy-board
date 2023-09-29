import React from "react";
import EmptyCard from "./EmptyCard";
import Card from "./Card";

const SortCards = ({ rowX, rowsX, rowY, rowsY, data, addCard }) => {
  let cardData = data.filter(function (card) {
    return card.rowX === rowX && card.rowY === rowY;
  });

  return cardData.length > 0 ? (
    <Card
      cardData={cardData}
      rowX={rowX}
      rowY={rowY}
      rowsX={rowsX}
      rowsY={rowsY}
    />
  ) : (
    <EmptyCard rowX={rowX} rowY={rowY} addCard={addCard} />
  );
};

export default SortCards;

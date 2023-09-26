import React from "react";
import { Typography } from "@mui/material";

const SortCards = ({ rowX, rowY, data }) => {
  return (
    <>
      {data.map((cardData) => {
        console.log(
          cardData.rowX === rowX && cardData.rowY === rowY
            ? cardData.data.title
            : ""
        );
        cardData.rowX === rowX && cardData.rowY === rowY ? (
          <Typography variant="caption" display="block" sx={{ color: "green" }}>
            KOrv
          </Typography>
        ) : (
          <Typography variant="caption" display="block" sx={{ color: "grey" }}>
            X:{rowX},Y:{rowY}
          </Typography>
        );
      })}
    </>
  );
};

export default SortCards;

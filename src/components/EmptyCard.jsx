import React from "react";
import { Typography } from "@mui/material";

const EmptyCard = ({ rowX, rowY }) => {
  return (
    <Typography variant="caption" display="block" sx={{ color: "lightgrey" }}>
      X:{rowX},Y:{rowY}
    </Typography>
  );
};

export default EmptyCard;

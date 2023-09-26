import React from "react";
import Typography from "@mui/material";

const Card = () => {
  return (
    <>
      {data.rowX === rowX && data.rowY === rowY ? (
        <Typography variant="caption" display="block" sx={{ color: "red" }}>
          korv
        </Typography>
      ) : (
        <Typography variant="caption" display="block" sx={{ color: "grey" }}>
          X:{rowX},Y:{rowY}
        </Typography>
      )}
    </>
  );
};

export default Card;

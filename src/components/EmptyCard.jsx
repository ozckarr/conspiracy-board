import React from "react";
import { Typography, Stack, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EmptyCard = ({ rowX, rowY, addCard }) => {
  return (
    <Stack direction="row" spacing={8}>
      <Typography variant="caption" display="block" sx={{ color: "lightgrey" }}>
        X:{rowX},Y:{rowY}
      </Typography>
      <IconButton
        size="small"
        sx={{ color: "lightgrey" }}
        onClick={() => addCard(rowX, rowY)}
      >
        <EditIcon />
      </IconButton>
    </Stack>
  );
};

export default EmptyCard;

import React, { useState } from "react";
import {
  IconButton,
  Card as MuiCard,
  CardActions,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Tag from "./minicomponents/Tag";
import EditIcon from "@mui/icons-material/Edit";

const Card = ({ cardData, rowX, rowsX, rowY, rowsY }) => {
  const [openCard, setOpenCard] = useState(false);
  let { title, text, color, tags } = cardData[0].data;

  const handleClick = () => {
    setOpenCard(!openCard);
  };

  return (
    <MuiCard
      sx={{
        backgroundColor: color,
        height: openCard ? "19.7em" : "100%",
        position: "relative",
        zIndex: rowsX + rowsY - rowX - rowY,
        padding: "0.3em 0.5em",
        width: openCard ? "17.7em" : "100%",
      }}
      variant="outlined"
    >
      <Stack
        direction="row"
        spacing={openCard ? 24 : 6}
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          borderBottom: openCard ? "1px solid grey" : "none",
        }}
      >
        <div>
          <Typography>{title}</Typography>
          <div style={{ display: "flex" }}>
            {tags.map((tag, i) => (
              <Tag tag={tag} key={i} />
            ))}
          </div>
        </div>
        <IconButton
          sx={{
            width: "2em",
            transform: openCard ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Stack>
      <Paper
        sx={{
          backgroundColor: "rgb(0,0,0,0)",
          padding: "0.5em",
          overflowY: "scroll",
          height: "14em",
        }}
        className="cardContent"
      >
        <Typography>{text}</Typography>
      </Paper>
      <CardActions
        sx={{
          padding: "0.2em",
          backgroundColor: "rgb(0,0,0,0)",
        }}
      >
        <Stack direction="row" spacing={24}>
          <IconButton size="small">
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ transform: "rotate(180deg)" }}
            onClick={handleClick}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </MuiCard>
  );
};

export default Card;

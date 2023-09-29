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
  const [isCardOpen, setIsCardOpen] = useState(false);
  let { title, text, color, tags } = cardData[0].data;

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
  };

  return (
    <MuiCard
      sx={{
        backgroundColor: color,
        height: isCardOpen ? "19.7em" : "100%",
        position: "relative",
        zIndex: rowsX + rowsY - rowX - rowY,
        padding: "0.3em 0.5em",
        width: isCardOpen ? "17.7em" : "100%",
      }}
      variant="outlined"
    >
      <Stack
        direction="row"
        spacing={isCardOpen ? 22 : 6}
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          borderBottom: isCardOpen ? "1px solid grey" : "none",
        }}
      >
        <div style={{ width: "fit-content" }}>
          <Typography>{title}</Typography>
          <div className="tag-container" style={{ display: "flex" }}>
            {tags.map((tag, i) => (
              <Tag tag={tag} key={i} isBig={false} />
            ))}
          </div>
        </div>
        <IconButton
          sx={{
            width: "2em",
            transform: isCardOpen ? "rotate(180deg)" : "rotate(0deg)",
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
          maxHeight: "14em",
          display: isCardOpen ? "block" : "none",
        }}
        className="cardContent"
      >
        <div className="tag-container" style={{ display: "flex" }}>
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} isBig={true} />
          ))}
        </div>
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

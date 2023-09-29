import React from "react";
import tags from "../../demo-data/demo-tags";
import { Typography, Tooltip } from "@mui/material";

const Tag = ({ tag, isBig }) => {
  return isBig ? (
    <div
      className="cardTag cardTag-big"
      style={{ backgroundColor: tags[tag].color, boxShadow: "1px 1px" }}
    >
      <Typography>{tags[tag].tagTitle}</Typography>
    </div>
  ) : (
    <Tooltip title={tags[tag].tagTitle}>
      <div
        className="cardTag cardTag-small"
        style={{ backgroundColor: tags[tag].color, boxShadow: "1px 1px" }}
      ></div>
    </Tooltip>
  );
};

export default Tag;

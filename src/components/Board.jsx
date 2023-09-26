import React from "react";
import { Paper, Typography } from "@mui/material";
import SortCards from "./SortCards";

const Board = ({ rowsX, rowsY, data }) => {
  const rowXArray = [...Array(rowsX).keys()];
  const rowYArray = [...Array(rowsY).keys()];

  return (
    <div style={{ width: "fit-content" }}>
      {rowYArray.map((rowX) => (
        <div className="board-rowX" key={rowX} sx={{ width: "fit-content" }}>
          {rowXArray.map((rowY) => (
            <Paper
              className="board-rowY"
              key={rowY}
              elevation={0}
              variant="outlined"
              square={false}
              sx={{
                height: "2.5em",
                width: "9em",
                padding: "0.1em 0.3em",
              }}
            >
              <SortCards rowX={rowX} rowY={rowY} data={data} />
            </Paper>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

import React from "react";
import { Paper, Typography, Container } from "@mui/material";

const Board = ({ rowsX, rowsY }) => {
  const rowXArray = [...Array(rowsX).keys()];
  const rowYArray = [...Array(rowsY).keys()];
  return (
    <Container>
      {rowYArray.map((rowX) => (
        <div className="board-rowX" key={rowX}>
          {rowXArray.map((rowY) => (
            <Paper
              className="board-rowY"
              key={rowY}
              elevation={0}
              variant="outlined"
              square={false}
            >
              <Typography variant="caption" display="block">
                X:{rowX},Y:{rowY}
              </Typography>
            </Paper>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Board;

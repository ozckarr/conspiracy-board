import React from "react";
import { Card, Container, Button } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import EastIcon from "@mui/icons-material/East";

const Menu = ({ setRowsX, setRowsY, rowsY, rowsX }) => {
  return (
    <Card variant="outlined" sx={{ position: "fixed", bottom: "0", left: "0" }}>
      <Button
        variant="outlined"
        startIcon={<EastIcon />}
        onClick={() => {
          setRowsX((rowsX) => rowsX + 1);
        }}
      >
        Add X row
      </Button>
      <Button
        variant="outlined"
        startIcon={<SouthIcon />}
        onClick={() => {
          setRowsY((rowsY) => rowsY + 1);
        }}
      >
        Add Y row
      </Button>
    </Card>
  );
};

export default Menu;

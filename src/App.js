import "./style/style.css";
//import initialData from "./demo-data/initial-data";
import { useState } from "react";
import Board from "./components/Board";
import Menu from "./components/Menu";

function App() {
  const [rowsX, setRowsX] = useState(10);
  const [rowsY, setRowsY] = useState(10);

  const handleAddXRow = () => {
    setRowsX(rowsX++);
  };
  const handleAddYRow = () => {
    setRowsY(rowsY++);
  };

  return (
    <>
      <Board rowsX={rowsX} rowsY={rowsY} />
      <Menu
        setRowsX={setRowsX}
        setRowsY={setRowsY}
        rowsY={rowsY}
        rowsX={rowsX}
      />
    </>
  );
}

export default App;

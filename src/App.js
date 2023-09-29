import "./style/style.css";
import initialData from "./demo-data/initial-data";
import { useState } from "react";
import Board from "./components/Board";
import Menu from "./components/Menu";
import uuid4 from "uuid4";

function App() {
  const [rowsX, setRowsX] = useState(10);
  const [rowsY, setRowsY] = useState(10);
  const [data, setData] = useState(initialData);

  const addCard = (rowX, rowY) => {
    setData((prev) => [
      ...prev,
      {
        id: uuid4(),
        rowX: rowX,
        rowY: rowY,
        data: {
          title: "testelitest",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
          color: "#ADD8E6",
          tags: [4, 5, 6],
        },
      },
    ]);
    console.log(rowX, rowY);
  };

  return (
    <>
      <Board rowsX={rowsX} rowsY={rowsY} data={data} addCard={addCard} />
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

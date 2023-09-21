import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";

import { BoardBox } from "./BoardBox";
import { Card } from "./Card";

function Example() {
  const containers = [
    ["A1", "A2", "A3", "A4", "A5", "A6"],
    ["B1", "B2", "B3", "B4", "B5", "B6"],
    ["C1", "C2", "C3", "C4", "C5", "C6"],
    ["D1", "D2", "D3", "D4", "D5", "D6"],
    ["E1", "E2", "E3", "E4", "E5", "E6"],
    ["F1", "F2", "F3", "F4", "F5", "F6"],
  ];
  const [parent, setParent] = useState(null);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {parent === null ? <Card id="draggable">Drag me</Card> : null}

      {containers.map((innerArray, outerIndex) => (
        <div key={outerIndex} className="board-x-row">
          {innerArray.map((item) => (
            <BoardBox key={item} id={item}>
              {parent === item ? (
                <>
                  <Card id={"draggable draggable-" + item}>{item}</Card>
                </>
              ) : (
                item
              )}
            </BoardBox>
          ))}
        </div>
      ))}
    </DndContext>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    /*
    <BoardBox key={item} id={item}>
    {parent === item ? draggableMarkup : "Drop here"}
  </BoardBox>
*/
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
  }
}

export default Example;

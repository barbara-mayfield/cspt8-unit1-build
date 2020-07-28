import React, { useState } from "react";
import "./Board.css";

const GameBoard = () => {
    // Set initial numbers of rows and columns
    const numRows = 150;
    const numCols = 25;

    // The values of the grid will be changing
    // So the grid will be set in state
    // Using a function here will initiate the grid one time
    // and populate the array (grid) with 0's
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            // Generates array filled with 0's
            rows.push(Array.from([numCols, () => 0]));
        }
        return rows;
    });

    const handleClick = () => {
        // The click will change the state of the cell from dead (black, 0)
        // to alive (white, 1)
        // So we need to be able to target a cell
        // If cell state dead === true, change to alive (1)
        // If cell state alive === true, change to dead (0)
    };

    return (
        <div
            className="Board"
            style={{
                // grid template columns will set the number of
                // columns the grid will go to, and the size of the cols
                gridTemplateColumns: `repeat(${numCols}, 25px)`,
            }}
        >
            {
                // here we are mapping over the rows and columns
                // the key will be the row and col "[i]-[j]"
                // backgroundColor will be determined by the grid state
                grid.map((rows, i) =>
                    rows.map((col, j) => (
                        <div
                            className="Grid"
                            key={`${i}-${j}`}
                            onClick={handleClick}
                            style={{
                                height: 25,
                                width: 25,
                                border: "1px solid white",
                                backgroundColor: grid[i][j]
                                    ? "black"
                                    : undefined,
                            }}
                        ></div>
                    ))
                )
            }
        </div>
    );
};

export default GameBoard;

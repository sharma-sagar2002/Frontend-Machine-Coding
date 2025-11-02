import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setISX] = useState<boolean>(true);
  const [winner, setWinner] = useState("Playing");

  const handleClick = (index: number) => {
    const newBoard = board;
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setISX((prev) => !prev);

    checkWinner();
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setISX(true);
    setWinner("Playing");
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(`${board[a]} wins`);
        return;
      }
    }

    let count = 0;
    for (const b of board) {
      if (b !== null) count++;
    }

    count === board.length && setWinner("Draw");
  };
  return (
    <>
      <Stack gap={2} sx={{ alignItems: "center" }}>
        <Typography variant="h6">{`Game Status :  ${winner}`}</Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)", // 3 columns
            gridTemplateRows: "repeat(3, 100px)", // 3 rows
            gap: "2px",
          }}
        >
          {board.map((cell, index) => (
            <Button
              key={index}
              sx={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                cursor: "pointer",
                color: "black !important",
              }}
              disabled={cell !== null}
              onClick={() => handleClick(index)}
            >
              {cell}
            </Button>
          ))}
        </Box>
        <Button onClick={resetBoard}>Reset</Button>
      </Stack>
    </>
  );
};

export default TicTacToe;

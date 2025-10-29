import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <Typography>Counter App</Typography>
      <Stack gap={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          Counter : {count}
        </Typography>
        <Stack direction={"column"} gap={2}>
          <Button onClick={() => handleInc()}>Increment</Button>
          <Button onClick={() => handleDec()}>Decrement</Button>
          <Button onClick={() => handleReset()}>Reset</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Counter;

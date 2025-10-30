import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const Readmore = () => {
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;

  const [str, setStr] = useState(text);
  const [less, setLess] = useState(false);
  const handleToggle = (e: any) => {
    console.log(e);
    e.target.innerText === "READ MORE"
      ? setLess((prev) => !prev)
      : setLess(true);
    less ? setStr(text.substr(0, 50)) : setStr(text);

    console.log(less);
  };
  return (
    <>
      <Stack gap={1}>
        <Typography>{str}</Typography>

        <Button onClick={(e) => handleToggle(e)}>
          {" "}
          {less ? `Read More` : `Read More`}{" "}
        </Button>
      </Stack>
    </>
  );
};

export default Readmore;

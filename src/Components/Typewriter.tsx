import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  delay: number;
};

const Typewriter = ({ delay, text }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === text.length) {
        setDisplayText(text);
        setIndex(0);
        return;
      }
      setDisplayText(text.slice(0, index));
      setIndex((prev) => prev + 1);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [displayText, index]);

  return (
    <>
      <Typography>{displayText}</Typography>
    </>
  );
};

export default Typewriter;

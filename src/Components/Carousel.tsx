import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const cardsList = [
  {
    title: "Card 1",
    text: "This is the description for Card 1, highlighting its main features.",
  },
  {
    title: "Card 2",
    text: "This is the description for Card 2, providing useful information.",
  },
  {
    title: "Card 3",
    text: "This is the description for Card 3, giving more context about its purpose.",
  },
  {
    title: "Card 4",
    text: "This is the description for Card 4, summarizing its key details.",
  },
  {
    title: "Card 5",
    text: "This is the description for Card 5, outlining what it represents.",
  },
  {
    title: "Card 6",
    text: "This is the description for Card 6, offering a quick overview.",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState<number>(0);

  const handleNext = () => {
    if (index === cardsList.length - 1) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };

  return (
    <>
      <Stack gap={2}>
        <Stack gap={1}>
          <Typography>{cardsList[index].title}</Typography>
          <Typography>{cardsList[index].text}</Typography>
        </Stack>

        <Stack gap={1} direction={"row"}>
          <Button onClick={handlePrev} disabled={index === 0 ? true : false}>
            Prev
          </Button>
          <Typography>{`Page No. ${index + 1} of ${
            cardsList.length
          }`}</Typography>
          <Button
            onClick={handleNext}
            disabled={index === cardsList.length - 1 ? true : false}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Carousel;

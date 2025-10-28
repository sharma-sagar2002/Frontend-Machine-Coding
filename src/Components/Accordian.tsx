import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const accordianSet = [
    {
      ques: "ques 1",
      ans: "ans 1",
    },
    {
      ques: "ques 2",
      ans: "ans2",
    },
    {
      ques: "ques3",
      ans: "ans3",
    },
  ];
  const handleToggle = (index: number) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };
  return (
    <>
      <Stack gap={2}>
        {accordianSet.map((a: any, index: number) => {
          return (
            <Stack gap={1} width={1 / 2} sx={{ alignSelf: "center1" }}>
              <Box
                sx={{ backgroundColor: "coral", cursor: "pointer" }}
                onClick={(e: any) => {
                  console.log(e);
                  setActiveIndex(index);
                  handleToggle(index);
                }}
              >
                {a?.ques}
              </Box>
              {activeIndex === index && <Typography>{a?.ans}</Typography>}
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default Accordian;

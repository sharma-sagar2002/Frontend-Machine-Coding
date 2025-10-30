import { Stack, Typography } from "@mui/material";
import { useState } from "react";

const Tooltip = () => {
  const icons = [
    { emoji: "🏠", label: "Home" },
    { emoji: "📧", label: "Email" },
    { emoji: "⚙️", label: "Settings" },
  ];

  const [hoverIndex, setHoverIndex] = useState<null | number>(null);
  return (
    <>
      <Stack gap={2} direction={"row"}>
        {icons.map((icon: any, index: number) => {
          return (
            <Stack gap={1}>
              <Typography
                key={index}
                sx={{ cursor: "pointer" }}
                onMouseEnter={() => {
                  setHoverIndex(index);
                  console.log(hoverIndex);
                }}
                onMouseLeave={() => {
                  setHoverIndex(null);
                  console.log(hoverIndex);
                }}
              >
                {icon?.emoji}
              </Typography>

              {hoverIndex === index && <Typography>{icon?.label}</Typography>}
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default Tooltip;

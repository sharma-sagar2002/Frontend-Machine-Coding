import { Box, Stack } from "@mui/material";
import { useState } from "react";
import { keyframes } from "@mui/system";

interface Progress {
  id: number;
  width: number;
}

const growAnimation = (targetWidth: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${targetWidth}%;
  }
`;

function MultiProgressBar() {
  const [progressList] = useState<Progress[]>([
    { id: 1, width: 50 },
    { id: 2, width: 60 },
    { id: 3, width: 80 },
  ]);

  return (
    <Stack gap={2}>
      {progressList.map((progress) => (
        <Box key={progress.id} sx={{ height: "40px", width: "100%", bgcolor: "#eee" }}>
          <Box
            sx={{
              height: "100%",
              bgcolor: "green",
              animation: `${growAnimation(progress.width)} 1.5s ease-out forwards`,
            }}
          />
        </Box>
      ))}
    </Stack>
  );
}

export default MultiProgressBar;

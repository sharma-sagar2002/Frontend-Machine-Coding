import { Box, Stack, Typography } from "@mui/material";
// TODO : add animation in this progress bar so that when user loads the screen it should see some animation in that progress bar
function ProgressBar({ progress }: { progress: number }) {
  return (
    <>
      <Stack gap={3}>
        <Typography
          variant="h4"
          sx={{ alignSelf: "center", fontWeight: "600" }}
        >
          Progress Bar
        </Typography>
        <Box
          sx={{
            borderRadius: "10px",
            border: "1px solid black",
          }}
        >
          <Box
            sx={{
              width: `${progress}%`,
              borderRadius: "10px",
              backgroundColor: "lightcoral",
              height: "20px",
              color: "white",
              textAlign: "center",
            }}
          >
            {`${progress}%`}
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default ProgressBar;

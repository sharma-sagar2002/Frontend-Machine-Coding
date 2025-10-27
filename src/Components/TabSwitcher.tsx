import { Box, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { updateTabValue } from "../redux/appSlice";

const TabSwitcher = () => {
  const tabValue = useSelector((store: RootState) => store.app.tabVal);
  const dispatch = useDispatch();
  console.log(tabValue);
  return (
    <>
      <Stack gap={2}>
        <Stack gap={1} direction={"row"} alignSelf={"center"}>
          <Box
            p={2}
            width={100}
            height={20}
            sx={{
              backgroundColor: "yellow",
              cursor: "pointer",
              border: tabValue === "home" ? "2px solid black" : null,
            }}
            onClick={() => {
              dispatch(updateTabValue("home"));
            }}
          >
            Home
          </Box>
          <Box
            p={2}
            width={100}
            height={20}
            sx={{
              backgroundColor: "lightblue",
              cursor: "pointer",
              border: tabValue === "profile" ? "2px solid black" : null,
            }}
            onClick={() => {
              dispatch(updateTabValue("profile"));
            }}
          >
            Profile
          </Box>
          <Box
            p={2}
            width={100}
            height={20}
            sx={{
              backgroundColor: "lightcoral",
              cursor: "pointer",
              border: tabValue === "setting" ? "2px solid black" : null,
            }}
            onClick={() => {
              dispatch(updateTabValue("setting"));
            }}
          >
            Setting
          </Box>
        </Stack>

        <Box width={400} sx={{ backgroundColor: "coral" }} alignSelf={"center"}>
          <Typography
            textAlign={"center"}
          >{`Welcome to ${tabValue}`}</Typography>
        </Box>
      </Stack>
    </>
  );
};

export default TabSwitcher;

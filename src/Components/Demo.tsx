import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleTheme } from "../redux/themeSlice";

const Demo = () => {
  // const themeSetup = useContext(ThemeContext);
  // const { theme, setTheme } = themeSetup as any;

  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Stack gap={1} direction={"column"}>
      <Typography variant="h4">{theme}</Typography>
      <Button variant="contained" color="primary" onClick={changeTheme}>
        Change
      </Button>
    </Stack>
  );
};

export default Demo;

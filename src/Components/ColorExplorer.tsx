import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { colorNameToHex } from "../utils/helper";

const ColorExplorer = () => {
  const [searchColor, setSearchColor] = useState<string>("");
  const [colorVal, setColorVal] = useState<string | undefined>("");

  const handleSearch = () => {
    const searchKey = searchColor.toLowerCase().trim();
    if (searchKey == "") {
      alert("Please enter some color name");
      return;
    }

    const val = colorNameToHex(searchKey);
    setSearchColor("");
    setColorVal(val);

    if (val === undefined) {
      alert("Please enter valid name");
      return;
    }
  };
  return (
    <Stack gap={4}>
      <Typography variant="h4">Color Explorer</Typography>

      <Stack direction={"row"} gap={3}>
        <TextField
          placeholder="Enter your color"
          value={searchColor}
          onChange={(e: any) => {
            setSearchColor(e.target.value);
          }}
        />
        <Box
          sx={{
            cursor: "pointer",
            border: "1px solid grey",
            alignContent: "center",
            backgroundColor: "bisque",
            padding: "7px 10px",
            borderRadius: "10px",
          }}
          onClick={handleSearch}
        >
          🔍
        </Box>
      </Stack>

      {colorVal !== undefined && colorVal !== "" && (
        <Stack gap={2}>
          <Box
            sx={{
              minHeight: "200px",
              maxWidth: "200px",
              borderRadius: "40%",
              backgroundColor: colorVal,
            }}
          ></Box>
          <Typography sx={{ alignItems: "center", alignContent: "center" }}>
            Hex Code : {colorVal}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default ColorExplorer;

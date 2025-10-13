import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const TogglePassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <Stack>
        <Typography>Toggle Password</Typography>
        <Stack gap={2} direction={"row"}>
          <TextField
            type={show ? "text" : "password"}
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setShow((prev) => !prev);
            }}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default TogglePassword;
2;

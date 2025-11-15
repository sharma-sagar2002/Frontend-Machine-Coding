import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function PasswordGenerator() {
  const [len, setLen] = useState<string>("");
  const [lc, setLc] = useState<boolean>(true);
  const [uc, setUc] = useState<boolean>(false);
  const [num, setNum] = useState<boolean>(false);
  const [sym, setSym] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");

  const handleChecked = ({ type }: { type: "lc" | "uc" | "num" | "sym" }) => {
    if (type === "lc") {
      setLc((prev) => !prev);
    } else if (type === "uc") setUc((prev) => !prev);
    else if (type === "num") setNum((prev) => !prev);
    else setSym((prev) => !prev);
  };

  const generatePassword = () => {
    setPassword("abc");
  };
  return (
    <>
      <Stack width={1 / 2} sx={{ margin: "auto" }}>
        <Stack gap={1}>
          <Typography>Password</Typography>
          <TextField
            value={len}
            onChange={(e: any) => setLen(e.target.value)}
            placeholder="Enter length of password"
          />
        </Stack>

        <Stack gap={1}>
          <Stack direction={"row"}>
            <Checkbox
              checked={lc}
              onClick={() => {
                handleChecked({ type: "lc" });
              }}
            />
            <Typography sx={{ alignSelf: "center" }}>Lower Case</Typography>
          </Stack>

          <Stack direction={"row"}>
            <Checkbox
              checked={uc}
              onClick={() => {
                handleChecked({ type: "uc" });
              }}
            />
            <Typography sx={{ alignSelf: "center" }}>Upper Case</Typography>
          </Stack>

          <Stack direction={"row"}>
            <Checkbox
              checked={num}
              onClick={() => {
                handleChecked({ type: "num" });
              }}
            />
            <Typography sx={{ alignSelf: "center" }}>Number</Typography>
          </Stack>

          <Stack direction={"row"}>
            <Checkbox
              checked={sym}
              onClick={() => {
                handleChecked({ type: "sym" });
              }}
            />
            <Typography sx={{ alignSelf: "center" }}>Symbol</Typography>
          </Stack>
        </Stack>

        <Button
          sx={{ marginTop: "20px" }}
          variant="contained"
          onClick={generatePassword}
          disabled={len == ""}
        >
          Generate
        </Button>

        {password != "" && <Typography variant="h3">{password}</Typography>}
      </Stack>
    </>
  );
}

export default PasswordGenerator;

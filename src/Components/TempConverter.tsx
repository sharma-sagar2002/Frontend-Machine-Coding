import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function TempConverter() {
  const [from, setFrom] = useState<
    "selected" | "celcius" | "farenheit" | "kelvin"
  >("selected");
  const [to, setTo] = useState<"selected" | "celcius" | "farenheit" | "kelvin">(
    "selected"
  );
  const [val, setVal] = useState<any>();
  const [temp, setTemp] = useState<number | undefined>();

  console.log("from", from);

  const handleSubmit = () => {
    if (!val || from === "selected" || to === "selected") return;

    let result: number = Number(val);

    // Convert input to Celsius first (as a common base)
    if (from === "farenheit") {
      result = ((result - 32) * 5) / 9; // F → C
    } else if (from === "kelvin") {
      result = result - 273.15; // K → C
    }

    // Then convert from Celsius to target
    if (to === "farenheit") {
      result = (result * 9) / 5 + 32; // C → F
    } else if (to === "kelvin") {
      result = result + 273.15; // C → K
    }

    setTemp(Number(result.toFixed(2)));
  };
  return (
    <>
      <Stack gap={5} sx={{ alignItems: "center" }}>
        <Typography variant="h3">Temprature Convertor</Typography>
        <Stack gap={3} width={1 / 2}>
          <TextField
            type="number"
            label="Enter Temprature"
            placeholder="Enter temprature"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
          <TextField
            select
            label="Select from option"
            //@ts-ignore
            onChange={(e) => setFrom(e.target.value)}
          >
            <MenuItem value={"selected"}>Selected</MenuItem>
            <MenuItem value={"celcius"}>Celcius</MenuItem>
            <MenuItem value={"kelvin"}>Kelvin</MenuItem>
            <MenuItem value={"farenheit"}>Farenheit</MenuItem>
          </TextField>

          <TextField
            select
            label="Select to option"
            //@ts-ignore
            onChange={(e) => setTo(e.target.value)}
          >
            <MenuItem value={"selected"}>Selected</MenuItem>
            <MenuItem value={"celcius"}>Celcius</MenuItem>
            <MenuItem value={"kelvin"}>Kelvin</MenuItem>
            <MenuItem value={"farenheit"}>Farenheit</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit}
            disabled={from === "selected" || to === "selected"}
          >
            {" "}
            Convert{" "}
          </Button>

          {temp !== undefined && (
            <Typography>{`The temp from ${from} to ${to} is :  ${temp}`}</Typography>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default TempConverter;

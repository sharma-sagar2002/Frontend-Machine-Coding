import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function BmiCalculator() {
  const [w, setW] = useState<number>(0);
  const [h, setH] = useState<number>(0);
  const [ans, setAns] = useState<undefined | number>(undefined);

  const calcBmi = () => {
    const height = (h / 100) ^ 2;
    const bmi = w / height;
    setAns(bmi);
  };

  const handleReset = () => {
    setW(0);
    setH(0);
    setAns(undefined);
  };
  return (
    <>
      <Stack gap={2}>
        <TextField
          placeholder="Enter Weight (kg)"
          type="number"
          label={"Weight"}
          value={w}
          onChange={(e: any) => setW(e.target.value)}
        />
        <TextField
          placeholder="Enter Height (cm)"
          label={"Height"}
          type="number"
          value={h}
          onChange={(e: any) => setH(e.target.value)}
        />
        <Stack direction={"row"} gap={2}>
          <Button variant="contained" onClick={calcBmi}>
            Calculate BMI
          </Button>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </Stack>

        {ans != undefined && (
          <Typography variant="h3"> {`Your BMI is : ${ans}`}</Typography>
        )}
      </Stack>
    </>
  );
}

export default BmiCalculator;

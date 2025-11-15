import { Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/use-debouce";

const Demo = () => {
  const [text, setText] = useState("");
  const debounceSearch = useDebounce({ value: text, delay: 200 });

  useEffect(() => {
    console.log(debounceSearch);
  }, [debounceSearch]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <Stack gap={1} direction={"column"}>
      <Typography variant="h4">Search Bar</Typography>
      <TextField value={text} onChange={(e) => handleChange(e)} />
    </Stack>
  );
};

export default Demo;

import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { generateUniqueId } from "../utils/helper";
function ChipsInput() {
  const [chipList, setChipList] = useState<{ id: string; val: string }[]>([]);
  const [chip, setChip] = useState<{ id: string; val: string }>({
    id: "",
    val: "",
  });

  const handleKeyDown = (e: any) => {
    if (e.target.value.trim() === "") return;
    if (e.key === "Enter") {
      const id = generateUniqueId();
      setChipList([...chipList, { val: e.target.value.trim(), id: id }]);
      setChip({ id: "", val: "" });
    }
  };

  const handleRemove = (id: string) => {
    setChipList(chipList.filter((chip) => chip.id != id));
  };

  return (
    <Stack spacing={3}>
      <Stack spacing={2}>
        <Typography variant="h4">Chips Input</Typography>

        <TextField
          variant="outlined"
          placeholder="Enter text for chip"
          value={chip.val}
          onChange={(e) => setChip({ id: "", val: e.target.value })}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </Stack>

      {chipList && (
        <Stack direction={"row"} spacing={2}>
          {chipList.map((chip: { id: string; val: string }) => (
            <Stack
              borderRadius={4}
              sx={{ border: "2px solid grey" }}
              p={1}
              direction={"row"}
              gap={2}
            >
              <Typography>{chip.val}</Typography>
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  handleRemove(chip.id);
                }}
              >
                X
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default ChipsInput;

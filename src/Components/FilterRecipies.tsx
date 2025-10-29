import { Box, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const FilterRecipies = () => {
  const restList = [
    {
      name: "Dominos",
      rating: "4.6",
    },
    {
      name: "PizzaHut",
      rating: "2.5",
    },
    {
      name: "Chappan Bhog",
      rating: "3.2",
    },
  ];

  const [filteredList, setFilteredList] = useState(restList);
  const [rating, setRating] = useState<string | null>(null);
  return (
    <>
      <Stack gap={2}>
        <TextField
          select
          label="Select rating"
          value={rating}
          onChange={(e: any) => {
            setRating(e.target.value);
            setFilteredList(
              restList.filter((res: any) => res?.rating >= Number(rating))
            );
          }}
        >
          {filteredList.map((res: any, index: number) => {
            return (
              <MenuItem key={index} value={res?.rating}>
                {res.rating}
              </MenuItem>
            );
          })}
        </TextField>

        <Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>
          Filtered Restaurants{" "}
        </Typography>
        {filteredList.map((res: any) => {
          return (
            <Stack sx={{ backgroundColor: "coral", width: 1 / 3 }}>
              <Box p={1}>
                <Typography sx={{ fontSize: "1.2rem" }}>{res?.name}</Typography>
                <Typography>Rating : {res?.rating}</Typography>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default FilterRecipies;

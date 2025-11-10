import { Checkbox, Stack, Typography } from "@mui/material";
import { useState } from "react";

interface Item {
  id: number;
  text: string;
  pinned: boolean;
}
function PinItems() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "Buy groceries", pinned: false },
    { id: 2, text: "Call Alice", pinned: false },
    { id: 3, text: "Meeting with Bob", pinned: false },
    { id: 4, text: "Pay electricity bill", pinned: false },
    { id: 5, text: "Read a book", pinned: false },
    { id: 6, text: "Go for a walk", pinned: false },
    { id: 7, text: "Fix bug #234", pinned: false },
    { id: 8, text: "Review pull requests", pinned: false },
  ]);

  const handleClick = (id: number) => {
    const newItems = items.map((item: Item) => {
      return item?.id === id ? { ...item, pinned: !item?.pinned } : item;
    });
    const sortedList = [
      ...newItems?.filter((item: Item) => item?.pinned === true),
      ...newItems?.filter((item: Item) => item?.pinned === false),
    ];

    setItems(sortedList);
  };

  return (
    <>
      <Stack gap={2} sx={{ marginLeft: "20px" }}>
        <Typography
          fontFamily={"monospace"}
          fontWeight={"bold"}
          fontSize={"2em"}
          sx={{ alignSelf: "center" }}
        >
          Pin to top List
        </Typography>
        <Stack gap={1}>
          {items.map((item: Item) => {
            return (
              <Stack direction={"row"} gap={1}>
                <Checkbox
                  checked={item?.pinned}
                  onClick={() => {
                    handleClick(item?.id);
                  }}
                />
                <Typography sx={{ alignContent: "center" }}>
                  {item?.text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}

export default PinItems;

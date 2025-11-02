import { Button, Checkbox, Stack, Typography } from "@mui/material";
import { useState } from "react";
type ListType = {
  id: string;
  name: string;
  checked: boolean;
}[];
const TransferList = () => {
  const itemList: ListType = [
    {
      id: "a",
      name: "ItemA",
      checked: false,
    },
    {
      id: "b",
      name: "ItemB",
      checked: false,
    },
    {
      id: "c",
      name: "ItemC",
      checked: false,
    },
  ];
  const [availableList, setAvailableList] = useState<any>(itemList);
  const [selectedList, setSelectedList] = useState<any>([]);

  const handleAToB = () => {
    const checkedList = availableList.filter(
      (item: any) => item.checked === true
    );
    setSelectedList((prev: any) => [...prev, ...checkedList]);
    console.log("line 35", selectedList);
    setAvailableList(
      availableList.filter((item: any) => item.checked === false)
    );
    console.log("line 39", availableList);
  };

  const handleBToA = () => {
    const checkedList = selectedList.filter(
      (item: any) => item.checked === true
    );
    setAvailableList((prev: any) => [...prev, ...checkedList]);
    setSelectedList(selectedList.filter((item: any) => item.checked === false));
    console.log("line 48", availableList, selectedList);
  };

  const handleAvailableChange = (e: any, index: number) => {
    let tempList = [...availableList];
    tempList[index] = { ...tempList[index], checked: e.target.checked };
    setAvailableList(tempList);
  };

  const handleSelectedChange = (e: any, index: number) => {
    let tempList = [...selectedList];
    tempList[index] = { ...tempList[index], checked: e.target.checked };
    setSelectedList(tempList);
  };

  return (
    <>
      <Stack direction={"row"} gap={3}>
        <Stack gap={2}>
          <Typography>Available Items</Typography>
          <Stack gap={1}>
            {availableList.map((item: any, index: number) => {
              return (
                <Stack direction={"row"}>
                  <Checkbox
                    checked={item.checked}
                    onChange={(e: any) => handleAvailableChange(e, index)}
                  />
                  <Typography>{item?.name}</Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>

        <Stack gap={1}>
          <Button onClick={handleAToB}>{`->`}</Button>
          <Button onClick={handleBToA}>{`<-`}</Button>
        </Stack>

        <Stack gap={2}>
          <Typography>Selected Items</Typography>
          <Stack gap={1}>
            {selectedList?.map((item: any, index: number) => {
              return (
                <Stack direction={"row"}>
                  <Checkbox
                    checked={item.checked}
                    onChange={(e: any) => handleSelectedChange(e, index)}
                  />
                  <Typography>{item?.name}</Typography>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default TransferList;

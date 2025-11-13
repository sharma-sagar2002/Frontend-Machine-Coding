import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function BillingCounter() {
  const [counterCount, setCounterCount] = useState<any>(0);
  const [counters, setCounters] = useState<any>([]);
  const [intialized, setInitialized] = useState<any>(false);
  const [quantity, setQuantity] = useState<any>(0);

  const handleInitialized = () => {
    Array.from({ length: counterCount }, () => []);
    setInitialized(true);
  };

  const handleAddQuantity = () => {
    const totalItemsPerCounter = counters.map((queue: any) => {
      return queue.reduce((acc: any, sum: any) => {
        sum += acc;
      }, 0);
    });
    let counterIndex = totalItemsPerCounter.findIndex(
      (total: any) => total === 0
    );
    if (counterIndex === -1) {
      const minTotal = Math.min(...totalItemsPerCounter);
      counterIndex = totalItemsPerCounter.findIndex(
        (total: number) => total === minTotal
      );
    }
    const updatedCounters = counters.map((queue: any, idx: number) =>
      idx === counterIndex ? [...queue, quantity] : queue
    );
    setCounters(updatedCounters);
    setQuantity(0);
  };

  return (
    <>
      {!intialized ? (
        <Stack direction={"row"} gap={1}>
          <TextField
            type="number"
            value={counterCount}
            onChange={(e) => setCounterCount(e.target.value)}
          />
          <Button variant="contained" onClick={handleInitialized}>
            Add Counters
          </Button>
        </Stack>
      ) : (
        <>
          <Stack gap={3}>
            {/* adding counters  */}
            <Stack direction={"row"} gap={1}>
              <TextField
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Button variant="contained" onClick={handleAddQuantity}>
                Add Quantity
              </Button>
            </Stack>

            <Stack gap={2} direction={"row"}>
              {counters.map((counter: any, index: number) => {
                return (
                  <Stack gap={1} sx={{ border: "1px solid coral" }} p={2}>
                    <Typography>{`Counter No. ${index + 1}`}</Typography>
                    <Stack gap={1}>
                      {counter.map((ele: any) => {
                        return (
                          <Box sx={{ border: "1px solid black" }}>{ele}</Box>
                        );
                      })}
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
        </>
      )}
    </>
  );
}

export default BillingCounter;

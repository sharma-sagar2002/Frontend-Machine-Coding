import { Box, Stack, TextField } from "@mui/material";
import { marked } from "marked";
import { useState } from "react";

function MarkdownEditor() {
  const [inputText, setInputText] = useState<string>("");
  const getMarkdownText = () => {
    return {
      __html: marked.parse(inputText),
    };
  };
  return (
    <>
      <Stack
        gap={1}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextField
          label="Input Text"
          placeholder="Enter markdown text here ...."
          multiline
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={3}
          maxRows={10}
        />

        <Box
          component={"div"}
          minWidth={"200px"}
          sx={{ border: "1px solid grey" }}
          dangerouslySetInnerHTML={getMarkdownText()}
        ></Box>
      </Stack>
    </>
  );
}

export default MarkdownEditor;

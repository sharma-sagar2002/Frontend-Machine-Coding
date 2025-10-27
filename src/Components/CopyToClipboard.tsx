import { Typography } from "@mui/material";
import { useState } from "react";

function CopyToClipboard() {
  const [val, setVal] = useState<string>("");
  const [message, setMessage] = useState<any>(null);

  function handleCopy(value: string) {
    navigator.clipboard.writeText(value);
    setVal("");
    setMessage("Text Copied Successfully !");
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              data-testid="input-field"
              placeholder="Type Something"
            />
          </label>
          <button
            onClick={() => {
              handleCopy(val);
            }}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
        </div>
      </div>

      <Typography>{message}</Typography>
    </div>
  );
}

export default CopyToClipboard;

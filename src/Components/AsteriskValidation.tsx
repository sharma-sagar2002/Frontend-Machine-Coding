import { useState } from "react";
import "../Components/syles.css";
import { Typography } from "@mui/material";

function AsteriskFieldValidation() {
  const [nameVal, setNameVal] = useState("");
  const [location, setLocation] = useState("");
  const [e1, setE1] = useState<any>(null);
  const [e2, setE2] = useState<any>(null);

  const handleSubmit = () => {
    if (nameVal === "") {
      setE1("Enter some name");
    }
    if (location === "") {
      setE2("Please enter some location");
    }
    if (location !== "" && nameVal !== "") {
      setNameVal("");
      setLocation("");
      alert("Form submitted successfully!!");
    }
  };
  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            value={nameVal}
            onChange={(e: any) => {
              setNameVal(e.target.value);
            }}
            placeholder="Enter your name"
          />
          <Typography>{e1}</Typography>
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            className="input"
            type="text"
            placeholder="Enter your location"
          />
          <Typography>{e2}</Typography>
        </div>

        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AsteriskFieldValidation;

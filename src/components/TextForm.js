import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const upcHandler = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  
  const lcHandler = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const clearHandler = () => {
    setText("");
    props.showAlert("Text has been cleared", "success");
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Extra spaces removed", "success");
  };



// text to speech
function convertTextToVoice() {
  if (!text.trim()) {
    alert("Please enter some text.");
    return;
  }

  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance(text);

  // Optional: Set voice properties
  utterance.rate = 1; // Speed of speech (0.1 to 10, default 1)
  utterance.pitch = 1; // Pitch (0 to 2, default 1)
  utterance.volume = 1; // Volume (0 to 1, default 1)

  // Speak the text
  window.speechSynthesis.speak(utterance);
}
// text to speech


  const capitalizeWords = () => {
    setText(
      text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
    props.showAlert("Capitalized each word", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#2b2929" : "white",
          }}
          value={text}
          onChange={textHandler}
          id="myBox"
          rows="8"
          placeholder="Enter text here..."
        ></textarea>

        <div className="mt-3">
          <button className="btn btn-primary me-2" onClick={upcHandler}>
            Uppercase
          </button>
          <button className="btn btn-primary me-2" onClick={lcHandler}>
            Lowercase
          </button>
          <button className="btn btn-warning me-2" onClick={clearHandler}>
            Clear
          </button>
          <button className="btn btn-success me-2" onClick={copyHandler}>
            Copy Text
          </button>
          <button className="btn btn-info me-2" onClick={removeExtraSpaces}>
            Remove Spaces
          </button>
          <button className="btn btn-secondary" onClick={capitalizeWords}>
            Capitalize Words
          </button>
          <button className="btn btn-info ms-2" onClick={convertTextToVoice}>
            Speak
          </button>
        </div>
      </div>

      <div
        className="container mt-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          words and {text.length} characters
        </p>
        <p>
          Estimated read time:{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
          minutes
        </p>
      </div>

      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

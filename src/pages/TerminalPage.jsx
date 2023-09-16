import { useState } from "react";

function TerminalPage() {
  const [textAreaInput, setTextAreaInput] = useState("");
  const [helpValues, setHelpValues] = useState("");
  const help = {
    about: "My Name Is Ammar Ehab and I am a Full-Stack Developer",
    social: "hi",
  };

  function checkHelpCommand() {
    if (textAreaInput.toLowerCase() === "help") {
      setHelpValues(Object.keys(help).join("\n"));
    } else if (textAreaInput.toLowerCase() === "about") {
      setHelpValues(help.about);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    checkHelpCommand();
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          value={textAreaInput}
          onChange={(e) => setTextAreaInput(e.target.value)}
        />
        <textarea
          value={helpValues}
          cols="100"
          rows="20"
          onChange={(e) => setTextAreaInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TerminalPage;

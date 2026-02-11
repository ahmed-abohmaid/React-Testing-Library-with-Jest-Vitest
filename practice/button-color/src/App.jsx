import "./App.css";
import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button
        className={isRed ? "red" : "blue"}
        onClick={() => setIsRed((prev) => !prev)}
        disabled={isDisabled}
      >
        Change to {isRed ? "Blue" : "Red"}
      </button>
      <br />

      <div>
        <input
          type="checkbox"
          id="disable-button"
          onChange={(e) => setIsDisabled(e.target.checked)}
        />
        <label htmlFor="disable-button">
          {isDisabled ? "Enable" : "Disable"} button
        </label>
      </div>
    </div>
  );
}

export default App;

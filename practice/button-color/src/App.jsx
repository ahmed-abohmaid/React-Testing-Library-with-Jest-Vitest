import "./App.css";
import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <button
        className={isRed ? "red" : "blue"}
        onClick={() => setIsRed((prev) => !prev)}
      >
        Change to {isRed ? "Blue" : "Red"}
      </button>
    </div>
  );
}

export default App;

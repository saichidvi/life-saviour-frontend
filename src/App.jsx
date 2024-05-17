import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container">
      <h1 className="text-center mt-5">Hello Vite + React + Bootstrap!</h1>
      <button className="btn btn-primary">Bootstrap Button</button>
    </div>
  );
}

export default App;

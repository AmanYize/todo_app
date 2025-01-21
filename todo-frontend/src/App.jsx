import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to the todo app</h1>
      <Todo />
    </div>
  );
}

export default App;

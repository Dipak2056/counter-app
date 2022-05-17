import { useState } from "react";
import "./App.css";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";

function App() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>counter app without redux</h1>
      <Container count={count} />
      <Form increaseCount={increaseCount} decreaseCount={decreaseCount} />
    </div>
  );
}

export default App;

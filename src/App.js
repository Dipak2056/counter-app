import "./App.css";
import { Form } from "./components/form/Form";
import { Container } from "./components/tableContainer/Container";

function App() {
  return (
    <div className="App">
      <h1>counter app without redux</h1>
      <Container />
      <Form />
    </div>
  );
}

export default App;

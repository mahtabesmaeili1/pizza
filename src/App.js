import { PizzaList } from "./components/pizzaList";
import { AddPizzaForm } from "./components/AddPizzaForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;

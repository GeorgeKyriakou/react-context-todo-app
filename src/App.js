import React from "react";
import TodosState from "./context/todos/todos.state";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <TodosState>
      <Todos />
    </TodosState>
  );
}

export default App;

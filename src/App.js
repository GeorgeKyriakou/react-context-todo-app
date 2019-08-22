import React, { Fragment } from "react";
import TodosState from "./context/todos/todos.state";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <TodosState>
      <Fragment>
        <Todos />
      </Fragment>
    </TodosState>
  );
}

export default App;

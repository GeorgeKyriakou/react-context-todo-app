import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import Button from "@material-ui/core/Button";

import NewTodoButton from "./New-todo";

const Navbar = () => {
  const todosContext = useContext(TodosContext);
  const { todos, generateTodo } = todosContext;

  return (
    <nav className="navbar">
      <h3>
        In queue: <span>{todos.length}</span>
      </h3>
      <p style={{ color: "lightgrey", fontSize: "12px" }}>
        Running React v{React.version}
      </p>
      <ul>
        <li>
          <Button className="btn" onClick={generateTodo}>
            Generate
          </Button>
        </li>
        <li>
          <NewTodoButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

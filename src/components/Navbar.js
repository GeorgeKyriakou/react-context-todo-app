import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";

import NewTodoButton from "./New-todo";

const Navbar = () => {
  const todosContext = useContext(TodosContext);
  const { todos } = todosContext;

  return (
    <nav className="navbar">
      <h3>
        In queue: <span>{todos.length}</span>
      </h3>
      <ul>
        <li>
          <NewTodoButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

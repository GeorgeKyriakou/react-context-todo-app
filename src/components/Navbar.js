import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  const todosContext = useContext(TodosContext);
  const { todos, generateTodo, toggleCreateBar } = todosContext;

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
          <Button id="generate-btn" className="btn" onClick={generateTodo}>
            Generate
          </Button>
        </li>
        <li>
          <Button id="new-btn" className="btn" onClick={toggleCreateBar}>
            New
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

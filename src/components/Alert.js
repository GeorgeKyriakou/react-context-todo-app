import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";

const Alert = () => {
  const todosContext = useContext(TodosContext);
  const { showAlert, alertMessage, alertType } = todosContext;

  return (
    showAlert && (
      <div className={`alert alert-${alertType}`}>
        <i className="fas fa-info-circle" />
        {alertMessage}
      </div>
    )
  );
};

export default Alert;

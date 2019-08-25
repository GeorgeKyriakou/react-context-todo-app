import React, { useContext, useEffect, Fragment } from "react";

import TodosContext from "../context/todos/todos.context";
import Navbar from "./Navbar";
import ConfirmModal from "./Confirm";
import Alert from "./Alert";
import NewTodoBar from "./New-todo-bar";
import TodosTable from "./Table";

const Todos = () => {
  const todosContext = useContext(TodosContext);
  const {
    setLoading,
    loading,
    loadTodos,
    isConfirmModalOpen,
    isCreateTodoBaraOpen
  } = todosContext;

  useEffect(() => {
    setLoading();
    loadTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="todos-container">
          <div style={{ maxWidth: "100%" }}>
            <Alert />
            {isCreateTodoBaraOpen && <NewTodoBar />}
            {isConfirmModalOpen && <ConfirmModal />}
            <TodosTable />
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Todos;

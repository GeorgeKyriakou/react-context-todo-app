// Here i will insert all the actions for this application
import React, { useReducer } from "react";
import axios from "axios";
import TodosContext from "./todos.context";
import TodosReducer from "./todos.reducer";

import * as fromTypes from "./todos.types";

const TodosState = props => {
  const initialState = {
    todos: [],
    selectedTodo: null,
    isConfirmModalOpen: false,
    showAlert: false,
    alertMessage: null,
    alert: null,
    loading: false
  };

  const [state, dispatch] = useReducer(TodosReducer, initialState);

  // Load Todos
  const loadTodos = async () => {
    setLoading();
    const response = await axios.get(`http://localhost:3000/api/todos/all`);
    dispatch({
      type: fromTypes.LOAD_TODOS_SUCCESS,
      payload: response.data
    });
  };

  // Create Todo
  const createTodo = async todo => {
    setLoading();
    const res = await axios.post(`http://localhost:3000/api/todos/add`, {
      todo
    });
    dispatch({
      type: fromTypes.CREATE_TODO_SUCCESS,
      payload: res.data
    });
  };

  // Update Todo
  const updateTodo = async todo => {
    setLoading();
    const res = await axios.put(`http://localhost:3000/api/todos/update`, {
      todo
    });
    dispatch({
      type: fromTypes.UPDATE_TODO_SUCCESS,
      payload: res.data
    });
  };

  //Remove Todo
  const removeTodo = async todo => {
    setLoading();
    const res = await axios.delete(
      `http://localhost:3000/api/todos/delete/${todo.id}`
    );
    dispatch({
      type: fromTypes.REMOVE_TODO_SUCCESS,
      payload: todo
    });
  };

  //Set Loading
  const setLoading = () => dispatch({ type: fromTypes.SET_LOADING });

  //Open create todo modal
  const openConfirmModal = todo =>
    dispatch({ type: fromTypes.OPEN_CONFIRM_MODAL, payload: todo });

  const closeModal = () => dispatch({ type: fromTypes.CLOSE_CONFIRM_MODAL });

  const setAlert = message => {
    dispatch({
      type: fromTypes.SHOW_ALERT,
      payload: message
    });
    setTimeout(() => {
      dispatch({
        type: fromTypes.HIDE_ALERT
      });
    }, 5000);
  };

  return (
    <TodosContext.Provider
      value={{
        todos: state.todos,
        isConfirmModalOpen: state.isConfirmModalOpen,
        selectedTodo: state.selectedTodo,
        showAlert: state.showAlert,
        alert: state.alert,
        alertMessage: state.alertMessage,
        loading: state.loading,
        loadTodos,
        createTodo,
        updateTodo,
        removeTodo,
        setLoading,
        openConfirmModal,
        closeModal,
        setAlert
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosState;

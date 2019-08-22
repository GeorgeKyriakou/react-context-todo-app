import * as fromTypes from "./todos.types";

export default (state, action) => {
  switch (action.type) {
    case fromTypes.LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    }
    case fromTypes.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        users: [],
        loading: false
      };
    }
    case fromTypes.UPDATE_TODO_SUCCESS: {
      const updatedTodo = action.payload;
      return {
        ...state,
        todos: state.todos.map(oldTodo =>
          oldTodo.id === updatedTodo.id ? updatedTodo : oldTodo
        ),
        loading: false
      };
    }
    case fromTypes.REMOVE_TODO_SUCCESS: {
      const removedTodo = action.payload;
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== removedTodo.id),
        loading: false
      };
    }
    case fromTypes.OPEN_CREATE_MODAL: {
      return {
        ...state,
        openCreateModal: true
      };
    }
    case fromTypes.CLOSE_CREATE_MODAL: {
      return {
        ...state,
        openCreateModal: false
      };
    }
    default:
      return state;
  }
};

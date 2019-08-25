import React from "react";
import { mount, shallow } from "enzyme";

import Todos from "../../components/Todos";
import Navbar from "../../components/Navbar";

jest.mock("../../context/todos/todos.state");

const context = {
  loadTodos: jest.fn(),
  createTodo: jest.fn(),
  updateTodo: jest.fn(),
  removeTodo: jest.fn(),
  setLoading: jest.fn(),
  openConfirmModal: jest.fn(),
  closeModal: jest.fn(),
  setAlert: jest.fn(),
  toggleCreateBar: jest.fn(),
  generateTodo: jest.fn()
};

describe("<Todos/>", () => {
  test("function called on click", () => {
    const component = shallow(<Navbar />).dive();
    expect(1).toBe(1);
    act(() => {
      component.find("#generate-btn").simulate("click");
      expect(context.generateTodo.mock.calls.length).toBe(1);
    });
  });
});

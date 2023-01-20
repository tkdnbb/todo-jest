import React from "react";
import {BrowserRouter} from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
)

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach(value => {
    fireEvent.change(inputElement, { target: { value } });
    fireEvent.click(buttonElement);
  })
}

describe("Todo", () => {
  it("should be able to add task.", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });
  it("should be able to add multiple tasks.", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "Pet my cat"]);
    const divElements = screen.getAllByText(/Go grocery shopping|Pet my cat/i);
    expect(divElements.length).toBe(2);
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from "../TodoList";

// const mockedSetTodos = jest.fn();

describe("TodoList", () => {
  it("should render.", () => {
    render(<TodoList todos={[]} />);
    const list = screen.getByTestId("todolist");
    expect(list).toBeInTheDocument();
  });
});

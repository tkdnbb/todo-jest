import React from "react";
import { TodoFace } from "../../interface";

interface Props {
  todos: TodoFace[];
}
export default function TodoList({ todos }: Props) {
  return (
    <div data-testid="todolist">
      {todos.map((todo: TodoFace) => (
        <div key={Math.random()}>{todo.title}</div>
      ))}
    </div>
  );
}

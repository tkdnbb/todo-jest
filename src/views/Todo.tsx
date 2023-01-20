import React, { useState } from "react";
import TodoInput from "../components/todoInput/TodoInput";
import TodoList from "../components/todoList/TodoList";
import { TodoFace } from "../interface";

function Todo() {
  const [todos, setTodos] = useState<TodoFace[]>([]);

  return (
    <div className="todo">
      <div>Todo</div>
      <TodoInput {...{ todos, setTodos }} />
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo;

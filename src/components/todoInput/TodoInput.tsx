import React, { Dispatch, SetStateAction, useState } from "react";
import { TodoFace } from "../../interface";

interface Props {
  setTodos: Dispatch<SetStateAction<TodoFace[]>>;
  todos: TodoFace[];
}
const TodoInput = ({ setTodos, todos }: Props) => {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      {
        id: Math.random(),
        title: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };
  return (
    <div data-testid="abc">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder={"Add a new task here..."}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoInput;

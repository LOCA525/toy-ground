import React, { useState } from "react";
import { styled } from "styled-components";
import TodoInput from "../Components/TodoInput";
import TodoList from "../Components/TodoList";

const TodoListPage = () => {
  const [todoData, setTodoData] = useState([]);
  return (
    <div>
      <TodoInput todoData={todoData} setTodoData={setTodoData} />
      <TodoList todoData={todoData} setTodoData={setTodoData} />
    </div>
  );
};

export default TodoListPage;

import React from "react";
import { styled } from "styled-components";
import TodoCard from "./TodoCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const TodoList = ({ todoData, setTodoData }) => {
  const onRemove = (id) => {
    setTodoData(todoData.filter((item) => item.id !== id));
  };
  const onDone = (id) => {
    // const toDone = todoData.filter((todoData요소) => todoData요소.id === id)[0];
    // toDone.done = !toDone.done;
    // setTodoData([...todoData]);

    const toDone = todoData.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setTodoData(toDone);
  };

  return (
    <div>
      <TodoListContainer>
        <TodoContainer>
          <WorkingTitle>Working..⚽️</WorkingTitle>
          <TodoCardContainer>
            {todoData?.map((item) => {
              return item.done ? (
                <div key={item.id}></div>
              ) : (
                <TodoCard key={item.id} item={item} onRemove={onRemove} onDone={onDone} />
              );
            })}
          </TodoCardContainer>
        </TodoContainer>

        <DoneContainer>
          <DoneTitle>Done...❗️</DoneTitle>
          <TodoCardContainer>
            {todoData?.map((item) => {
              return item.done ? (
                <TodoCard key={item.id} item={item} onRemove={onRemove} onDone={onDone} />
              ) : (
                <div key={item.id}></div>
              );
            })}
          </TodoCardContainer>
        </DoneContainer>
      </TodoListContainer>
    </div>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const TodoContainer = styled.div`
  width: 50%;
  border-right: 2px solid #ced3d7;
`;

const TodoCardContainer = styled.div`
  height: calc(100vh - 290px);
  overflow-y: scroll;
  padding: 30px;
`;
const DoneContainer = styled.div`
  width: 50%;
`;

const WorkingTitle = styled.div`
  font-weight: 900;
  margin-left: 30px;
  font-size: 20px;
`;
const DoneTitle = styled.div`
  font-weight: 900;
  margin-left: 30px;
  font-size: 20px;
`;
export default TodoList;

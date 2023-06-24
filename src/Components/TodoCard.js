import React from "react";
import { styled } from "styled-components";

const TodoCard = ({ item, onRemove, onDone }) => {
  const removeHandler = () => {
    onRemove(item.id);
  };
  const doneHandler = () => {
    onDone(item.id);
  };
  return (
    <div>
      <TodoCardContainer>
        <TitleContainer>{item.title}</TitleContainer>
        <ContentContainer>{item.content}</ContentContainer>

        <BtnContainer>
          <DeleteBtn onClick={removeHandler}>삭제</DeleteBtn>
          <DoneBtn onClick={doneHandler}>{item.done ? "취소" : "완료"}</DoneBtn>
        </BtnContainer>
      </TodoCardContainer>
    </div>
  );
};

const TodoCardContainer = styled.div`
  border-radius: 10px;
  height: 180px;
  border: 3px solid green;
  padding: 30px;
  margin-bottom: 10px;
`;

const TitleContainer = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 20px;
`;
const ContentContainer = styled.div`
  margin-bottom: 20px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteBtn = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40px;
  border: 2px solid red;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: red;
    transition: 0.6s;
  }
`;
const DoneBtn = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 40px;
  border: 2px solid green;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: green;
    transition: 0.6s;
  }
`;

export default TodoCard;

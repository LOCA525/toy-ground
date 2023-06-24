import React, { useState } from "react";
import { styled } from "styled-components";

const TodoInput = ({ todoData, setTodoData }) => {
  const id = new Date().getTime();
  const [inputs, setInputs] = useState({
    id: id,
    title: "",
    content: "",
    done: false,
  });
  const { title, content } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value,
      // name 키를 가진 값을 value 로 설정
    });
  };

  const todoSubmit = (e) => {
    e.preventDefault();
    setTodoData([...todoData, inputs]);
    setInputs({ id: id, title: "", content: "", done: false });
  };
  return (
    <div>
      <InputContainer>
        <InputContent>
          <TitleInputContainer>
            제목
            <TitleInput name="title" onChange={onChange} value={title} />
          </TitleInputContainer>
          <ContentInputContainer>
            내용
            <ContentInput name="content" onChange={onChange} value={content} />
          </ContentInputContainer>
        </InputContent>

        <EnterBtn onClick={todoSubmit}>추가하기</EnterBtn>
      </InputContainer>
    </div>
  );
};

const InputContainer = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e2e2e2;
  font-size: 18px;
  font-weight: 900;
`;

const TitleInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputContent = styled.div`
  display: flex;
`;

const TitleInput = styled.input`
  width: 150px;
  margin-left: 20px;
  margin-right: 30px;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    outline: 2px solid #d50000;
  }
`;

const ContentInput = styled.input`
  width: 150px;
  margin-left: 20px;
  border-radius: 5px;
  padding: 10px;
  &:focus {
    outline: 2px solid #d50000;
  }
`;

const EnterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #ffff;
  width: 100px;
  height: 40px;
  background-color: red;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background-color: #dc143c;
    transition: 0.5s;
  }
`;
export default TodoInput;

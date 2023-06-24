import React from "react";
import { styled } from "styled-components";

const Nav = ({ istodoPage, setIsTodoPage }) => {
  return (
    <div>
      <NavContainer>
        <TodoTabContainer
          onClick={() => {
            setIsTodoPage(true);
          }}
          bgcolor={istodoPage ? "red" : "transparent"}
        >
          todoList-ground
        </TodoTabContainer>
        <BtnTabContainer
          onClick={() => {
            setIsTodoPage(false);
          }}
          bgcolor={istodoPage ? "transparent" : "red"}
        >
          button-ground
        </BtnTabContainer>
      </NavContainer>
    </div>
  );
};

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px #ced3d7 solid;
  font-weight: 900;
  cursor: pointer;
`;

const TodoTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-right: 1px #ced3d7 solid;
  border-top-left-radius: 20px;
  background-color: ${(props) => props.bgcolor};
`;

const BtnTabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.bgcolor};
`;
export default Nav;

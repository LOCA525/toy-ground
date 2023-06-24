import "./App.css";
import TodoListPage from "./pages/todoListPage";
import { styled } from "styled-components";
import Nav from "./Components/Nav";
import { useState } from "react";

function App() {
  const [istodoPage, setIsTodoPage] = useState(true);

  return (
    <MainContainer>
      <ContentContainer>
        <Nav istodoPage={istodoPage} setIsTodoPage={setIsTodoPage} />
        {istodoPage ? <TodoListPage /> : <div> 개발예정</div>}
      </ContentContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const ContentContainer = styled.div`
  width: 900px;
  height: 600px;
  border: 1px #ced3d7 solid;
  border-radius: 20px;
`;
export default App;

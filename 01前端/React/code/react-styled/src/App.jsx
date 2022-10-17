import "./App.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.primary ? "skyblue" : "hotpink")};
`;
function App() {
  let obj = {
    width: "70px",
    height: "30px",
  };

  return (
    <div className="App">
      <div>123</div>
      <Title>
        <h1>12312</h1>
      </Title>

      <Button primary {...obj}>
        按钮
      </Button>
      <Button {...obj}>按钮</Button>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

function App() {
  const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;

  const style = css`
    color: hotpink;
  `;

  const SomeComponent = ({ children }) => (
    <div css={style}>
      Some hotpink text.
      {children}
    </div>
  );

  const anotherStyle = css({
    textDecoration: "underline",
  });

  const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button>Hello World</Button>
        <SomeComponent>
          <AnotherComponent />
        </SomeComponent>
      </header>
    </div>
  );
}

export default App;

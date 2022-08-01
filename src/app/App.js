import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import First_prgth from "./components/First_prgth";
import Header from "./components/Header";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Second_prgth from "./components/Second_prgth";
import Footer from "./components/Footer";
function App() {
  const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 3vh;
    max-width: 1200px;
  `;

  const TextWrapper = styled.div`
    display: grid;
    grid-row-gap: 3vh;
    max-width: 720px;
    justify-content: center;
    margin: 0 auto;
  `;
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <Wrapper>
        <Header />
        <Navbar />
        <Photo />
        <TextWrapper>
          <First_prgth /> <Second_prgth />
        </TextWrapper>
        <Links />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

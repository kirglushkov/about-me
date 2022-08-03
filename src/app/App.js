import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import First_prgth from "./components/First_prgth";
import Header from "./components/Header";
import LinksNavbar from "./components/LinksNavbar";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Second_prgth from "./components/Second_prgth";
import Footer from "./components/Footer";

import { useState } from "react";

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
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "black" : "light"));
  };

  const Button = styled.button`
    border: none;
    text-align: center;
    font-family: Dhyana-Bold;
    font-size: 1.2rem;
    src: local("Dhyana-Bold"), url("./fonts/Dhyana-Bold.ttf") format("truetype");
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 20%;
    height: auto;
    background-color: ${theme === "light" ? "black" : "white"};
    color: ${theme === "light" ? "white" : "black"};
    border-radius: 10px;

    &:hover {
      background-color: gray;
    }
  `;

  const Link = styled.a`
    color: ${(props) => props.clr};
  `;

  const links = ["youtube", "vk", "github", "twitter"];

  const Links = links.map((item) => (
    <Link
      clr={theme === "light" ? "hotpink" : "yellow"}
      href={`https://www.${item}.com/`}
    >
      {item}
    </Link>
  ));

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        background-color: ${theme === "light" ? "white" : "black"};
        color: ${theme === "light" ? "black" : "white"};
      `}
    >
      <Wrapper>
        <div>
          <Header />
          <Button onClick={toggleTheme}>
            Тема: {theme === "light" ? "white" : "black"}
          </Button>
        </div>

        <Navbar />
        <Photo />
        <TextWrapper>
          <First_prgth /> <Second_prgth />
        </TextWrapper>
        <LinksNavbar links={Links} />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;

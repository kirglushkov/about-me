import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function First_prgth() {
  const Header = styled.p2`
    font-family: Dhyana-Bold;
    font-size: 3.2vh;
    src: local("Dhyana-Bold"), url("./fonts/Dhyana-Bold.ttf") format("truetype");
  `;

  const Body = styled.p3`
    font-family: Dhyana-Regular;
    font-size: 2.2vh;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
  `;

  const Wrapper = styled.div`
    font-weight: 400;
    display: grid;
  `;

  return (
    <Wrapper>
      <Header>First Programmer</Header>
      <Body>
        Non Lorem adipisicing amet consectetur nostrud.Exercitation cillum eu
        sunt mollit ut sit incididunt ullamco cillum tempor tempor. Irure magna
        et nulla sit et voluptate velit ullamco non officia nulla occaecat.
        Culpa aute nostrud ipsum eu elit minim irure commodo nulla do dolor non.
        Fugiat do laboris excepteur esse et exercitation reprehenderit
        adipisicing laborum anim quis aliqua.
      </Body>
    </Wrapper>
  );
}

export default First_prgth;

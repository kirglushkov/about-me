import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function First_prgth() {
  const Header = styled.p2`
    font-family: Dhyana-Bold;
    font-size: 32px;
    font-weight: 400;
    src: local("Dhyana-Bold"), url("./fonts/Dhyana-Bold.ttf") format("truetype");
  `;

  const Body = styled.p3`
    font-family: Dhyana-Regular;
    font-size: 22px;
    font-weight: 400;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
  `;

  return (
    <div>
      <Header>First Programmer</Header>
      <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Body>
    </div>
  );
}

export default First_prgth;

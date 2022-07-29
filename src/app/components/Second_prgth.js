import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Second_prgth() {
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
      <Header>
        Second_prgth
        <Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Body>
      </Header>
    </div>
  );
}

export default Second_prgth;

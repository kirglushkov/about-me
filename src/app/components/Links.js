import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Links() {
  const First = ["youtube", "vk", "github", "twitter"];

  const Navbar = styled.div`
    font-family: Dhyana-Regular;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
  `;
  return (
    <Navbar>
      {First.map((item) => (
        <a href={`https://www.${item}.com/`}>{item}</a>
      ))}
    </Navbar>
  );
}

export default Links;

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Links() {
  const links = ["youtube", "vk", "github", "twitter"];

  const Navbar = styled.div`
    font-family: Dhyana-Regular;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
    display: flex;
    column-gap: 10px;
    justify-content: center;
    margin-bottom: -22px;
    margin-top: 32px;
  `;
  return (
    <Navbar>
      {links.map((item) => (
        <a href={`https://www.${item}.com/`}>{item}</a>
      ))}
    </Navbar>
  );
}

export default Links;

import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Navbar() {
  const Links = ["AboutMe", "Skills", "Portfolio", "Contacts"];

  const Navbar = styled.nav`
    font-family: Dhyana-Regular;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    text-align: center;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
  `;
  return (
    <div>
      <Navbar>
        {Links.map((item) => (
          <span>{item}</span>
        ))}
      </Navbar>
    </div>
  );
}

export default Navbar;

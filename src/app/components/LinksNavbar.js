import React from "react";
import styled from "@emotion/styled";

function LinksNavbar({ links }) {
  const Navbar = styled.div`
    font-family: Dhyana-Regular;
    font-size: 1.4vh;
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
  return <Navbar>{links}</Navbar>;
}

export default LinksNavbar;

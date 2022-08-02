import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function LinksNavbar() {
  const links = ["youtube", "vk", "github", "twitter"];

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
  const Link = styled.a({}, (props) => ({ color: props.color }));
  return (
    <Navbar>
      {links.map((item) => (
        <Link color="hotpink" href={`https://www.${item}.com/`}>
          {item}
        </Link>
      ))}
    </Navbar>
  );
}

export default LinksNavbar;

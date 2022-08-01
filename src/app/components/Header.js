import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import HeaderImage from "../../img/header-image.png";

function Header() {
  const Image = styled.img`
    position: relative;
    width: 100%;
    height: auto;
  `;
  return <Image src={HeaderImage}></Image>;
}

export default Header;

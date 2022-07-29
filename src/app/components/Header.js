import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

import HeaderImage from "../../img/header-image.png";

function Header() {
  const Image = styled.div`
    background-image: url(${HeaderImage});
    position: absolute;
    width: 920px;
    height: 180px;
  `;
  return <Image></Image>;
}

export default Header;

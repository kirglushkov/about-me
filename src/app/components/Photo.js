import React from "react";
import styled from "@emotion/styled";

import PhotoMain from "../../img/photo-main.png";

function Photo() {
  const Image = styled.img`
    width: 33%;
    height: auto;
    position: relative;
    margin: 0 auto;
  `;
  return <Image src={PhotoMain}></Image>;
}

export default Photo;

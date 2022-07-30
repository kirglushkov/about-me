import React from "react";
import styled from "@emotion/styled";

import PhotoMain from "../../img/photo-main.png";

function Photo() {
  const Image = styled.div`
    background-image: url(${PhotoMain});
    width: 249px;
    height: 332px;
    position: relative;
    margin: 0 auto;
  `;
  return <Image></Image>;
}

export default Photo;

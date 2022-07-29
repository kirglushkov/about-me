import React from "react";
import styled from "@emotion/styled";

function Footer() {
  const Allrights = styled.span`
    font-family: Dhyana-Regular;
    font-size: 16px;
    font-weight: 400;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
  `;

  return (
    <Allrights>all work © Kirill Glushkov • all rights reserved</Allrights>
  );
}

export default Footer;

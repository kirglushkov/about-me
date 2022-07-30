import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function First_prgth() {
  const Header = styled.p2`
    font-family: Dhyana-Bold;
    font-size: 32px;
    src: local("Dhyana-Bold"), url("./fonts/Dhyana-Bold.ttf") format("truetype");
  `;

  const Body = styled.p3`
    font-family: Dhyana-Regular;
    font-size: 22px;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
  `;

  const Wrapper = styled.div`
    font-weight: 400;
    display: grid;
  `;

  return (
    <Wrapper>
      <Header>First Programmer</Header>
      <Body>
        это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал
      </Body>
    </Wrapper>
  );
}

export default First_prgth;

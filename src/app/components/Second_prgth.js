import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

function Second_prgth() {
  const Header = styled.p2`
    font-family: Dhyana-Bold;
    font-size: 3.2vh;
    src: local("Dhyana-Bold"), url("./fonts/Dhyana-Bold.ttf") format("truetype");
  `;

  const Body = styled.p3`
    font-family: Dhyana-Regular;
    font-size: 2.2vh;
    src: local("Dhyana-Regular"),
      url("./fonts/Dhyana-Regular.ttf") format("truetype");
  `;

  const Wrapper = styled.div`
    font-weight: 400;
    display: grid;
  `;

  return (
    <Wrapper>
      <Header>Second page</Header>
      <Body>
        это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице с начала XVI века.
        В то время некий безымянный печатник создал большую коллекцию размеров и
        форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum
        не только успешно пережил без заметных изменений пять веков, но и
        перешагнул в электронный дизайн. Его популяризации в новое время
        послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х
        годах и, в более недавнее время, программы электронной вёрстки типа
        Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
      </Body>
    </Wrapper>
  );
}

export default Second_prgth;

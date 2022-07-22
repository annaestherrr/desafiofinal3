//Libs
import React from "react";
import styled from "styled-components";

//Style
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 480px) {
    width: 100%;
  }

  h1 {
    font-size: 3rem;
  }
`;

const BoxTitle = styled.div`
  width: 95%;
  height: 10rem;
  background-color: #adff2f;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 95%;
    height: 7rem;
  }
`;

const BoxText = styled.div`
  width: 90%;

  @media (max-width: 480px) {
    width: 100%;
  }

  p {
    padding: 1rem;
  }
`;

export default function CardSanitation() {
  return (
    <Container>
      <BoxTitle>
        <h1>Saneamento</h1>
      </BoxTitle>
      <BoxText>
        <p>- Reduzir o vazamento de água potável.</p>

        <p>- Investir em educação ambiental para a população.</p>
        <p>- Aumentar o nível de prestação de coleta de esgoto.</p>
        <p>- Limpezas regulares.</p>
      </BoxText>
    </Container>
  );
}

//Libs
import React from "react";
import styled from "styled-components";

//Style
const Container = styled.div`
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
  width: 80%;
  height: 10rem;
  background-color: #ff69b4;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 95%;
    height: 7rem;
  }
`;

const BoxText = styled.div`
  width: 80%;

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
        <h1>Lazer</h1>
      </BoxTitle>
      <BoxText>
        <p>
          - Instalar academias ao ar livre: Elas contribuem para a realização de
          atividades físicas, alongamentos, para a melhoria da capacidade motora
          e do equilíbrio. São ótimas para o corpo e a mente.
        </p>
        <p>
          - Melhorar a sinalização: Se há um item que merece atenção dos
          gestores municipais esse item é a sinalização. Invistir na troca de
          placas e na instalação de novas comunicações para deixar o local mais
          seguro e organizado.
        </p>

        <p>
          - Restaure bancos e praças: Parece bobagem, mas não é. Para alguns,
          bancos e praças podem ser supérfluos, mas para outros, são espaços de
          encontro, convivência, cultura e lazer.
        </p>
      </BoxText>
    </Container>
  );
}

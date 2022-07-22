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
  background-color: #ff4500;
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

export default function CardSecurity() {
  return (
    <Container>
      <BoxTitle>
        <h1>Segurança</h1>
      </BoxTitle>
      <BoxText>
        <p>
          - Reforma do modelo policial: A falta de integração, de capacidade de
          planejamento e de eficiência das polícias no Brasil são evidentes,
          especialmente após os protestos de junho de 2013. O índice de
          Confiança na Justiça da FGV demonstrou que 70% das pessoas não confiam
          na polícia. Para combater a violência de forma efetiva, é preciso
          investir em polícias integradas de ciclo completo, que atuem na
          prevenção e investigação de forma integrada, com controle externo
          forte e autônomo.
        </p>

        <p>
          - Aperfeiçoar a difusão e gestão de dados: Criar um sistema
          padronizado e integrado de gestão de informações, que seja
          disponibilizado de forma transparente para a sociedade.
        </p>
      </BoxText>
    </Container>
  );
}

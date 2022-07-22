//Libs
import React from "react";
import styled from "styled-components";

//Image
import Fundo from "../assets/fundo.jpg";
import Eu from "../assets/Eu.png";

//Style
const Container = styled.div`
  height: 85vh;
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const MyPicture = styled.img`
  width: 25rem;
  height: 23rem;
  margin-right: 2rem;

  @media (max-width: 480px) {
    width: 14rem;
    height: 14rem;
  }
`;

const Introduction = styled.div`
  width: 20rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3rem;
    font-family: Optima, sans-serif;
    font-weight: 200;
    text-align: center;
    color: #cd96cd;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    width: 80%;
    height: 6rem;
  }
`;

export default function Cover() {
  return (
    <Container style={{ backgroundImage: `url(${Fundo})` }}>
      <MyPicture src={Eu} alt="Minha foto" />
      <Introduction>
        <h2>Olá, sejam bem-vindos!</h2>
      </Introduction>
    </Container>
  );
}

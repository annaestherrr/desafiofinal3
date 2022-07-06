//Libs
import React from "react";
import styled from "styled-components";

//Image
import Fundo from "../assets/fundo.jpg";
import Eu from "../assets/Eu.png";

const Container = styled.div`
  height: 85vh;
  background-size: 100vw 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyPicture = styled.img`
  width: 25rem;
  height: 23rem;
  margin-right: 2rem;
`;

const Introduction = styled.div`
  width: 25rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-size: 2rem;
    font-family: Optima, sans-serif;
    font-weight: 200;
    text-align: center;
    color: #cd96cd;
  }
`;

export default function Home() {
  return (
    <Container style={{ backgroundImage: `url(${Fundo})` }}>
      <MyPicture src={Eu} alt="Minha foto" />
      <Introduction>
        <h3>Olá, sejam bem-vindos!</h3>
        <h3>Me chamo Anna Esther e esse é o meu blog!</h3>
      </Introduction>
    </Container>
  );
}

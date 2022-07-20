//Libs
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: red solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  border: red solid;
  width: 80%;
  height: 5rem;
  text-align: center;
`;

const Description = styled.p`
  border: red solid;
  width: 60%;
  height: 10rem;
  font-size: 1.2rem;
  text-align: center;
`;

export default function ODS() {
  return (
    <Container>
      <Title>Os Objetivos de Desenvolvimento Sustentável no Meu Bairro</Title>
      <Description> Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.</Description>
    </Container>
  );
}


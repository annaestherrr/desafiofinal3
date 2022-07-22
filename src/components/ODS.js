//Libs
import React, { useState } from "react";
import styled from "styled-components";

//Components
import CardHealth from "../components/CardHealth";
import CardSecurity from "../components/CardSecurity";
import CardSanitation from "../components/CardSanitation";
import CardLazer from "../components/CardLazer";

//Image
import IconSegurança from "../assets/iconsegurança.png";
import IconSaude from "../assets/iconsaude.png";
import IconLazer from "../assets/iconlazer.png";
import IconSaneamento from "../assets/iconsaneamento.png";

//Style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

const Title = styled.h1`
  width: 80%;
  text-align: center;

  @media (max-width: 480px) {
    width: 90%;
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  width: 70%;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const List = styled.ul`
  width: 73%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    width: 90%;
    display: flex;
    justify-content: space-around;
  }

  li {
    width: 10rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    @media (max-width: 480px) {
      width: 2rem;
      height: 3rem;
      margin: 0.2rem;
      margin-left: 0;
    }

    img {
      height: 5rem;

      @media (max-width: 480px) {
        width: 2rem;
      }
    }

    button {
      width: 10rem;
      height: 2rem;
      background-color: white;
      border: transparent;
      font-size: 1.2rem;

      @media (max-width: 480px) {
        width: 5rem;
        font-size: 0.7rem;
        background-color: transparent;
        color: white;
      }

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export default function ODS() {
  const [cardType, setCardType] = useState("saude");

  const renderCard = () => {
    switch (cardType) {
      case "saude":
        return <CardHealth />;
      case "segurança":
        return <CardSecurity />;
      case "saneamento":
        return <CardSanitation />;
      case "lazer":
        return <CardLazer />;
      default:
        return <CardHealth />;
    }
  };

  return (
    <Container>
      <Title>Objetivos de Desenvolvimento Sustentável em Inhaúma</Title>
      <Description>
        <a href="https://pt.wikipedia.org/wiki/Inha%C3%BAma_(bairro_do_Rio_de_Janeiro)#:~:text=Hist%C3%B3ria%20Vista%20do%20bairro%20de%20Inha%C3%BAma.%20O%20nome,quando%20ainda%20era%20uma%20aldeia%20ind%C3%ADgena%2C%20intitulado%20%22inha%C3%BAma%22.">
          Inhaúma
        </a>{" "}
        é um bairro de classes média e baixa da Zona Norte da cidade do Rio de
        Janeiro. O nome possui origem indígena e remonta ao período em que as
        terras do bairro eram ocupadas pelos tamoios. É derivado do nome de um
        pássaro preto muito comum na região, quando ainda era uma aldeia
        indígena, intitulado "inhaúma". E os objetivos de desenvolvimento
        sustentável são um conjunto de ações que visam melhorar a qualidade de
        vida da população. Estas ações devem diminuir as desigualdades sociais,
        ampliar os direitos e garantir acesso aos serviços que visam
        possibilitar as pessoas acesso pleno à cidadania.
      </Description>

      <List>
        <li style={{ background: "#87CEFA", cursor: "pointer" }}>
          <img src={IconSaude} alt="Icone saúde" />
          <button onClick={() => setCardType("saude")}>Saúde</button>
        </li>
        <li style={{ background: "#FF4500", cursor: "pointer" }}>
          <img src={IconSegurança} alt="Icone segurança" />
          <button onClick={() => setCardType("segurança")}>Segurança</button>
        </li>
        <li style={{ background: "#ADFF2F", cursor: "pointer" }}>
          <img src={IconSaneamento} alt="Icone sanemanto" />
          <button onClick={() => setCardType("saneamento")}>Saneamento</button>
        </li>
        <li style={{ background: " #FF69B4", cursor: "pointer" }}>
          <img src={IconLazer} alt="Icone lazer" />
          <button onClick={() => setCardType("lazer")}>Lazer</button>
        </li>
      </List>

      {renderCard()}
    </Container>
  );
}

//Libs
import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

//Image
import DesafioPet from "../assets/pet.png";
import DesafioCrespos from "../assets/crespos.png";
import DesafioTodoFlix from "../assets/todoflix.jpg";

//Style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const BoxTitle = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  border-top: #b0e0e6 solid 2.5px;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 0;
  }

  h1 {
    font-size: 3rem;
    color: #68228b;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;

const BoxImage = styled.div`
  width: 85%;
  margin-bottom: 5rem;

  @media (max-width: 480px) {
    width: 100%;
  }

  img {
    width: 20rem;
    height: 15rem;
    border: gray solid 1px;

    :hover {
      cursor: pointer;
    }

    @media (max-width: 480px) {
      width: 2rem;
      height: 10rem;
      width: 100%;
      margin-bottom: 0.7rem;
    }
  }
`;

export default function Projects() {
  return (
    <Container id="Projects">
      <BoxTitle>
        <h1>Alguns Projetos</h1>
      </BoxTitle>
      <BoxImage>
        <Carousel
          style={{ width: "65rem" }}
          renderBottomCenterControls={false}
          slidesToShow={3}
          wrapAround={true}
          autoplay={true}
          keyCodeConfig={true}
          autoplayInterval={1500}
          defaultControlsConfig={{
            nextButtonText: " >",
            prevButtonText: " <",
          }}
        >
          <a href="https://annaestherrr.github.io/crespos/">
            <img src={DesafioCrespos} alt="Imagem do desafio Crespos" />
          </a>
          <a href="https://annaestherrr.github.io/desafio-PetLoveAdoption/">
            <img src={DesafioPet} alt="Imagem do desafio Pet" />
          </a>
          <a href="https://annaestherrr.github.io/desafio-PetLoveAdoption/">
            <img src={DesafioTodoFlix} alt="Imagem do desafio ToDoFlix" />
          </a>
        </Carousel>
      </BoxImage>
    </Container>
  );
}

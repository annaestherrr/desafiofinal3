//Libs
import React from "react";
import styled from "styled-components";

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

const BoxText = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;

  p {
    width: 30%;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: #d8bfd8;

    @media (max-width: 480px) {
      width: 90%;
      margin-bottom: 0.7rem;
     
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    
  }
`;

export default function About() {
  return (
    <Container id="About">
      <BoxTitle>
        <h1>Sobre Mim</h1>
      </BoxTitle>
      <BoxText>
        <p>
          Me chamo Anna Esther e tenho 22 anos, moro na cidade do Rio de Janeiro
          - bairro Inhaúma, na comunidade Complexo do Alemão.
        </p>
        <p>
          Sou estudante de tecnologia na escola Vai na Web e estou em reta final
          no curso, passei por 3 módulos de muito estudo onde aprendi muito, não
          somente de programação mas também tive aulas socioemocinais incríveis!
        </p>
        <p>
          Meus hobbies favoritos são: Ouvir música, assistir filmes e séries e
          estar junto com minha família!
        </p>
      </BoxText>
    </Container>
  );
}

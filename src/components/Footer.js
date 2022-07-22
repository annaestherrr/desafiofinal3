//Libs
import React from "react";
import styled from "styled-components";

//Image
import iconInsta from "../assets/iconInsta.png";
import iconLinkedIn from "../assets/iconLinkedIn.png";
import iconFace from "../assets/iconFace.png";

const Container = styled.div`
  width: 100%;
  height: 6.1rem;
  background-color: #d8bfd8;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p{
    color: white;
    font-size: 1.2rem;
    font-weight: 500;

  @media (max-width: 480px) {
    width: 50%;
    font-size: 1rem;
    text-align: center;
  }
  }
`;

const List = styled.ul`
  width: 8rem;
  display: flex;
  justify-content: space-around;
  list-style: none;

  @media (max-width: 480px) {
    width: 30%;
  }
`;

const ImgIcon = styled.img`
  width: 1.7rem;
  height: 1.7rem;

  
  @media (max-width: 480px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export default function Footer() {
  return (
    <Container id="Footer">
      <p>Feito por Anna Esther - Escola: Vai na Web</p>

      <List>
        <a href="https://www.instagram.com/">
          <li>
            <ImgIcon src={iconInsta} alt="Icone do Instagram" />
          </li>
        </a>
        <a href="https://www.linkedin.com/">
          <li>
            <ImgIcon src={iconLinkedIn} alt="Icone do LinkedIn" />
          </li>
        </a>
        <a href="https://www.facebook.com/">
          <li>
            <ImgIcon src={iconFace} alt="Icone do Facebook" />
          </li>
        </a>
      </List>
    </Container>
  );
}

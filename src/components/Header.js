//Libs
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//Import
import Home from "./Home";

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
  justify-content: space-around;
`;

const Title = styled.h1`
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-weight: 200;
  font-size: 4rem;
  color: white;

  :hover {
    cursor: pointer;
    text-shadow: 7px 7px 10px #8ee5ee;
    transition: text-shadow 0.5s;
  }
`;

const Nav = styled.nav`
  width: 35%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ListOne = styled.ul`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const ItemListOne = styled.li`
  color: white;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;

const ListTwo = styled.ul`
  width: 8rem;
  display: flex;
  justify-content: space-around;
  list-style: none;
`;

const ImgIcon = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;

export default function Header() {
  return (
    <Container>
      <Title>Anna Esther</Title>

      <Nav>
        <ListOne>
          <ItemListOne>Inicio</ItemListOne>
          <ItemListOne>ODS</ItemListOne>
          <ItemListOne>Projetos</ItemListOne>
        </ListOne>

        <ListTwo>
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
        </ListTwo>
      </Nav>
    </Container>
  );
}

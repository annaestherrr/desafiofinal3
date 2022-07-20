//Libs
import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

//Components
import Home from "./components/Home";
import ODS from "./components/ODS";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
`;

const Container = styled.div`
  width: 100%;
  height: 6.1rem;
  background-color: #d8bfd8;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 480px) {
    height: 4rem;
  }
`;

const Title = styled.h1`
  font-family: Brush Script MT, Brush Script Std, cursive;
  font-weight: 200;
  font-size: 4rem;
  color: white;

  @media (max-width: 480px) {
    width: 25%;
    height: 4rem;
    font-size: 1.7rem;
    font-weight: 600;
  }

  :hover {
    cursor: pointer;
    text-shadow: 7px 7px 10px #68228b;
    transition: text-shadow 0.5s;
  }
`;

const Nav = styled.nav`
  width: 35%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const List = styled.ul`
  width: 20rem;
  display: flex;
  justify-content: space-around;
  list-style: none;

  a {
    text-decoration: none;
  }
`;

const ItemList = styled.li`
  color: white;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border: transparent solid 2px;
  border-radius: 12px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }

  :hover {
    cursor: pointer;
    border-color: #68228b;
    transition: all 0.5s;
  }
`;

export default function App() {
  return (
    <Router>
      <Container>
        <Title>Anna Esther</Title>
        <Nav>
          <List>
            <a href="#About">
              <ItemList>Sobre</ItemList>
            </a>
            <Link to="/ODS">
              <ItemList>ODS</ItemList>
            </Link>
            <a href="#Projects">
              <ItemList>Projetos</ItemList>
            </a>
            <a href="#Footer">
              <ItemList>Contatos</ItemList>
            </a>
          </List>
        </Nav>
      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ODS" element={<ODS />} />
      </Routes>
    </Router>
  );
}

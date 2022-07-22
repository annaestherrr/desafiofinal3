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
  background-color: #87cefa;
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

export default function CardHealth() {
  return (
    <Container>
      <BoxTitle>
        <h1>Saúde</h1>
      </BoxTitle>
      <BoxText>
        <p>
          - Otimizando o atendimento em prontos-socorros: A questão aqui é a
          atenção primária, também chamada de prioritária. Esse atendimento é
          fundamental para reduzir a pressão sobre os prontos-socorros e
          hospitais da rede pública. Segundo uma pesquisa feita pelo Conselho
          Federal de Medicina, o atendimento em prontos-socorros tem um grau de
          dificuldade intermediário em relação ao acesso do serviço.
        </p>
        <p>
          - Diminuindo a espera na recepção: A informatização da rede para um
          sistema de gestão hospitalar é uma boa solução para esse problema. A
          coleta de dados por meio de prontuários eletrônicos reduz o consumo de
          materiais de escritório e aumenta a velocidade do atendimento, além de
          diminuir a chance de erros. Essa ficha informatizada disponibiliza aos
          profissionais exames, diagnósticos, internações e dados que ajudam em
          futuros tratamentos, com a possibilidade de serem acessados em
          qualquer lugar.
        </p>

        <p>
          - Promovendo o atendimento familiar integrado: Uma estratégia para
          alcançar melhores resultados no atendimento à saúde é criar um
          atendimento familiar integrado, para dar continuidade aos tratamentos
          e prevenir problemas mais graves — principalmente à parcela da
          população que vive de forma vulnerável. Para isso, é fundamental ter
          equipes multidisciplinares e capazes de realizar tarefas como:
          compreender a realidade das famílias e identificar os problemas de
          saúde a que estão expostas; executar procedimentos necessários de
          vigilância à saúde; assegurar a continuidade nos tratamentos; garantir
          assistência integral, mantendo contato com as famílias e promovendo a
          saúde a partir da educação sanitária; levantar discussões sobre
          conceito de cidadania entre as comunidades, etc.
        </p>
      </BoxText>
    </Container>
  );
}

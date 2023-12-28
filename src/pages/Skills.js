import React from "react";
import styled from "styled-components";
import StyledCard from "../components/SkillsCards/Cards";
import ReactIcon from "../assets/icons/ReactIcon.svg";
import NodeIcon from "../assets/icons/NodeIcon.svg";
import CodeIcon from "../assets/icons/CodeIcon.svg";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background: ${(props) => props.theme.background};

  padding: 4em 8em;
  min-height: 800px;
`;

function Skills() {
  return (
    <StyledSection id="habilidades">
      <StyledCard
        titulo="React"
        descricao="No frontend utilizo React, criando interfaces com componentes reutilizáveis, roteamento eficiente, manipulação de eventos, integração de APIs externas
      e Redux para gerenciamento de estados globais. Domínio em ferramentas 
      de estilização como CSS-in-JS e Styled Components."
        icon={ReactIcon}
      />
      <StyledCard
        titulo="Node"
        descricao="Sou proficiente em Node.js para o backend. Possuo habilidades em construção de APIs REST, integração de bancos de dados 
      com Sequelize/Mongoose, uso do Express para rotas HTTP e WebSockets para comunicação em tempo real. "
        icon={NodeIcon}
      />
      <StyledCard
        titulo="Código Limpo"
        descricao="Em meus projetos, sempre aplico os princípios de código limpo no desenvolvimento.
      Acredito que um código limpo, bem estruturado e um controle de versão eficaz é essencial para um desenvolvimento sustentável e colaborativo."
        icon={CodeIcon}
      />
    </StyledSection>
  );
}

export default Skills;

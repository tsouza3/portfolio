import React from "react";
import styled from "styled-components";
import ProjectList from "../components/Projects/ProjectList.js";

import VideoDocs from "../../src/assets/videos/docs.mp4";
import VideoPaywise from "../../src/assets/videos/paywise.mp4";

import Fade from "react-reveal";

const StyledProjects = styled.section`
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.background};
`;

const Text = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 40px;

  margin: 1em;

  background-image: ${(props) => props.theme.backgroundImage};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 900px) {
    background-image: ${(props) => props.theme.backgroundImage};
  }
`;

const Line = styled.hr`
  background-image: ${(props) => props.theme.backgroundImage};
  width: 30%;
  height: 4px;
  margin-top: -2em;
  margin-left: 5.7em;
  margin-bottom: 5em;
  border: none;

  @media (max-width: 800px) {
    width: 60%;
  }
`;

const Titulo = styled.div`
  margin-left: 3.15em;
`;

const projects = [
  {
    id: 1,
    title: "Docs",
    shortDescription: "Simples editor de texto em tempo real com WebSockets.",
    description:
      "Simples editor de texto em tempo real com WebSockets, permitindo a colaboração instantânea entre usuários. As edições são sincronizadas em tempo real e armazenadas no MongoDB para persistência. Isso possibilita uma experiência de colaboração eficiente e continua. Também conta com um sistema de autenticação simples utilizando JWT.",
    videoSource: VideoDocs,
    repositorio: "https://github.com/tsouza3/docs",
    linkedin: "https://www.linkedin.com/in/thiago-souza-dev/",
  },
  {
    id: 2,
    title: "Paywise",
    shortDescription: "Aplicação para gestão de finanças pessoais.",
    description:
      "Aplicação para gestão de finanças que permite aos usuários controlar suas finanças de forma eficiente. Com essa aplicação, você pode adicionar entradas e despesas, organizando e categorizando suas     transações. Além disso, oferece a funcionalidade de filtrar gastos por categoria e data, facilitando a visualização e o acompanhamento dos seus gastos ao longo do tempo.",
    videoSource: VideoPaywise,
    repositorio: "https://github.com/tsouza3/paywise-front",
    linkedin:
      "https://www.linkedin.com/posts/thiago-souza-dev_bom-dia-developers-quero-compartilhar-com-activity-7140320130672103425-dFcC?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "",
    shortDescription: "",
    description: "",
    videoSource: "",
    repositorio: "",
    linkedin: "",
  },
  {
    id: 4,
    title: "",
    shortDescription: "",
    description: "",
    videoSource: "",
    repositorio: "",
    linkedin: "",
  },
  {
    id: 5,
    title: "",
    shortDescription: "",
    description: "",
    videoSource: "",
    repositorio: "",
    linkedin: "",
  },
  {
    id: 6,
    title: "",
    shortDescription: "",
    description: "",
    videoSource: "",
    repositorio: "",
    linkedin: "",
  },
];

function Projects() {
  return (
    <StyledProjects id="projetos">
      <Fade left fraction={0.3} cascade>
        <Titulo>
          <Text>Meus projetos.</Text>
        </Titulo>
        <Line />
      </Fade>

      <ProjectList projects={projects} />
    </StyledProjects>
  );
}

export default Projects;

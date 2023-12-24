import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";
import AboutCodeIcon from "../assets/icons/AboutCodeIcon.svg";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.theme.height};
  flex-direction: column;
  background: ${(props) => props.theme.aboutBackground};

  @media (max-width: 768px) {
    padding-bottom: 5em;
  }
`;

const StyledText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 52px;
  color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StyledSubText = styled.p`
  font-family: "Arimo", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  margin-top: 1em;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledSubTextWrapper = styled.div`
  max-width: 70%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const StyledSvg = styled.svg`
  width: 100px;
  height: 100px;
  margin-bottom: 1em;
`;

function About() {
  return (
    <StyledSection id="sobremim">
      <StyledSubTextWrapper>
        <Fade bottom fraction={0.3} cascade>
          <StyledSvg>
            <image xlinkHref={AboutCodeIcon} width="100px" height="100px" />
          </StyledSvg>
          <StyledText>Sobre Mim</StyledText>
          <StyledSubText>
            Olá, eu sou o Thiago. Estudante de Ciências da Computação e
            desenvolvedor web aprimorando habilidades no desenvolvimento de
            interfaces e sistemas. Busco minha primeira oportunidade
            profissional, para aplicar meus conhecimentos em tecnologia e
            solucionar problemas reais. Me considero um profissional pró-ativo,
            que gosta de desafios, preza pela qualidade de tudo que é entregue e
            que está sempre em busca de novos aprendizados. Busco sempre me
            manter atualizado com as novas tecnologias e tendências do mercado,
            incorporando as melhores práticas no desenvolvimento e sempre
            buscando melhorar, solucionando problemas com eficiência.
          </StyledSubText>
        </Fade>
      </StyledSubTextWrapper>
    </StyledSection>
  );
}

export default About;

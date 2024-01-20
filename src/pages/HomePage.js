import React from "react";
import styled from "styled-components";
import Btn from "../components/Btn";
import { ReactComponent as GithubIcon } from "../assets/icons/GithubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/LinkedinIcon.svg";
import { ReactComponent as GithubIconDark } from "../assets/iconsDark/GithubIconDark.svg";
import { ReactComponent as LinkedinIconDark } from "../assets/iconsDark/LinkedinIconDark.svg";
import Fade from "react-reveal";

const StyledSection = styled.section`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
  background: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    padding-bottom: 5em;
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 55px;
  line-height: 80px;
  background-image: ${(props) => props.theme.backgroundImage};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 50px;
  }
`;

const StyledBtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1em;

  & > * + * {
    margin-left: 2em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > * + * {
      margin-top: 1em;
      margin-left: 0;
    }
  }
`;

const SocialContainer = styled.div`
  position: relative;
  top: 1.5em;

  & > * + * {
    margin-left: 3em;
  }

  @media (max-width: 768px) {
  }
`;

const HomePage = ({ currentTheme }) => {
  const isDarkTheme = currentTheme === "dark";

  const Github = isDarkTheme ? GithubIconDark : GithubIcon;
  const Linkedin = isDarkTheme ? LinkedinIconDark : LinkedinIcon;

  return (
    <StyledSection id="inicio">
      <Fade top fraction={0.5} cascade>
        <SocialContainer>
          <a href="https://github.com/tsouza3" target="_blank" rel="noreferrer">
            <Github width="50px" height="50px" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-souza-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin width="50px" height="50px" />
          </a>
        </SocialContainer>

        <StyledContent>
          Thiago Souza. Full Stack Developer.
          <br />
          Construindo soluções inovadoras e eficientes.
        </StyledContent>

        <StyledBtn>
          <Btn text="Download CV" href="/pdf/Cv.pdf" download />
          <Btn text="Contatos" to={"contatos"} />
        </StyledBtn>
      </Fade>
    </StyledSection>
  );
};

export default HomePage;

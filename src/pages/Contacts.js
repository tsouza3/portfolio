import React from "react";
import styled from "styled-components";
import Fade from "react-reveal";

import WaveIcon from "../assets/icons/Wave.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/GithubIcon.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/LinkedinIcon.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/Phone.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/Email.svg";

import { ReactComponent as GithubIconDark } from "../assets/iconsDark/GithubIconDark.svg";
import { ReactComponent as LinkedinIconDark } from "../assets/iconsDark/LinkedinIconDark.svg";
import { ReactComponent as PhoneDark } from "../assets/iconsDark/EmailDark.svg";
import { ReactComponent as EmailDark } from "../assets/iconsDark/PhoneDark.svg";
import WaveDark from "../assets/iconsDark/WaveDark.svg";

const StyledFooter = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 6em;
  background: ${(props) => props.theme.background};
`;

const WaveContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: block;
`;

const MainText = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  background: ${(props) => props.theme.backgroundImage};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1px;
  }

  @media (max-width: 1155px) {
    margin-bottom: 2em;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 1em;

  & > * + * {
    margin-left: 2em;
  }
`;

function Contact({ currentTheme }) {
  const isDarkTheme = currentTheme === "dark";

  const Github = isDarkTheme ? GithubIconDark : GithubIcon;
  const Linkedin = isDarkTheme ? LinkedinIconDark : LinkedinIcon;
  const Phone = isDarkTheme ? PhoneDark : PhoneIcon;
  const Email = isDarkTheme ? EmailDark : EmailIcon;
  const Wave = isDarkTheme ? WaveDark : WaveIcon;

  return (
    <StyledFooter id="contatos">
      <Fade bottom fraction={0.3} cascade>
        <SocialContainer>
          <a href="https://github.com/tsouza3" target="_blank">
            <Github alt="GitHub" width="50px" height="50px" />
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-souza-dev/"
            target="_blank"
          >
            <Linkedin alt="LinkedIn" width="50px" height="50px" />
          </a>
          <a href="https://contate.me/thiago_dev" target="_blank">
            <Phone alt="Telefone" width="50px" height="50px" />
          </a>
          <a href="mailto:contato@thiagosouzadev.com" target="_blank">
            <Email alt="Email" width="50px" height="50px" />
          </a>
        </SocialContainer>
        <MainText>
          Vamos explorar oportunidades juntos?
          <br />
          Me envie uma mensagem.
        </MainText>
      </Fade>
      <WaveContainer>
        <img src={Wave} />
      </WaveContainer>
    </StyledFooter>
  );
}

export default Contact;

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Fade from "react-reveal";

import StyledSwitch from "../ToggleBtn";

import { useState } from "react";

import MobileNavbar from "./MobileNavbar";

import { RiMenu3Fill } from "react-icons/ri";

const StyledNavbar = styled.nav`
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 5em;
  flex-wrap: wrap;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;

  background: ${(props) => props.theme.backgroundImage};

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 18px;

  &:hover {
    transform: scale(0.7);
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media (max-width: 931px) {
    display: flex;
    justify-content: space-between;
    padding: 2em;
    cursor: pointer;
    color: ${(props) => props.theme.color};
  }
`;

const MobileContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme.background};
`;

const DesktopNavWrapper = styled.div`
  @media (max-width: 936px) {
    display: none;
  }
`;

function Navbar({ toggleTheme, currentTheme }) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MobileContainer>
        <MobileMenuIcon>
          <RiMenu3Fill
            size={45}
            onClick={() => {
              setMenuIsVisible(true);
            }}
          />
          <StyledSwitch theme={currentTheme} toggleTheme={toggleTheme} />
        </MobileMenuIcon>

        <MobileNavbar
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      </MobileContainer>

      <DesktopNavWrapper>
        <StyledNavbar>
          <Fade top fraction={0.5} cascade>
            <StyledList>
              <StyledListItem>
                <StyledLink
                  to="sobremim"
                  smooth={true}
                  exact={true}
                  duration={500}
                >
                  Sobre
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink
                  to="habilidades"
                  smooth={true}
                  duration={500}
                  exact={true}
                  offset={10}
                >
                  Habilidades
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink
                  to="projetos"
                  smooth={true}
                  duration={500}
                  exact={true}
                  offset={30}
                >
                  Projetos
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink
                  to="contatos"
                  smooth={true}
                  duration={500}
                  exact={true}
                >
                  Contato
                </StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledSwitch theme={currentTheme} toggleTheme={toggleTheme} />
              </StyledListItem>
            </StyledList>
          </Fade>
        </StyledNavbar>
      </DesktopNavWrapper>
    </>
  );
}

export default Navbar;

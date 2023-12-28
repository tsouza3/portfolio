import React, { useEffect } from "react";
import { styled, css } from "styled-components";
import { IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.backgroundImage};
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}

  @media (max-width: 1082px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  transform: scale(0.7);
  transition: 0.7s;
`;

const StyledLink = styled(ScrollLink)`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  color: #fff;
`;

export default function MobileNavbar({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    const toggleBodyOverflow = (shouldOverflow) => {
      document.body.style.overflow = shouldOverflow ? "hidden" : "auto";
    };

    toggleBodyOverflow(menuIsVisible);

    return () => {
      toggleBodyOverflow(false);
    };
  }, [menuIsVisible]);

  const closeNavbar = () => {
    setMenuIsVisible(false);
  };

  return (
    <>
      <Container isVisible={menuIsVisible}>
        <IoClose
          size={45}
          cursor="pointer"
          color="#fff"
          onClick={() => setMenuIsVisible(false)}
        />
        <StyledNav>
          <StyledLink
            to="sobremim"
            smooth={true}
            duration={500}
            onClick={closeNavbar}
          >
            Sobre
          </StyledLink>
          <StyledLink
            to="habilidades"
            smooth={true}
            duration={500}
            onClick={closeNavbar}
          >
            Habilidades
          </StyledLink>
          <StyledLink
            to="projetos"
            smooth={true}
            duration={500}
            onClick={closeNavbar}
          >
            Projetos
          </StyledLink>
          <StyledLink
            to="contatos"
            smooth={true}
            duration={500}
            onClick={closeNavbar}
          >
            Contatos
          </StyledLink>
        </StyledNav>
      </Container>
    </>
  );
}

import React, { useEffect } from "react";
import { styled, keyframes } from "styled-components";
import { IoClose } from "react-icons/io5";
import Btn from "../Btn.js";
import VideoPlayer from "./Player.js";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);

  backdrop-filter: blur(1px);
  z-index: 1;

  animation: ${fadeIn} 0.3s ease-in-out forwards;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 75%;
  transform: translate(-50%, -50%);
  background-color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 2;

  animation: ${fadeIn} 0.3s ease-in-out forwards;

  @media (max-width: 1055px) {
    width: 100%;
    height: 100%;
  }
`;

const ModalContent = styled.div`
  width: 40%;
  background-image: ${(props) => props.theme.backgroundImage};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: 1055px) {
    width: 100%;
    border-radius: 0;
    height: 50%;
  }
`;

const Content = styled.div`
  font-family: "Arimo", sans-serif;
  color: white;
  padding: 2em;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  font-family: "Poppins", sans-serif;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 2em;

  & > * + * {
    margin-left: 2em;
  }

  @media (max-width: 489px) {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 70%;
    left: 42%;
    transform: translate(-50%, -50%);

    & > * + * {
      margin-top: 1em;
      margin-right: 2em;
    }
  }
`;

function ProjectModal({ project, onClose, isOpen }) {
  useEffect(() => {
    const toggleBodyOverflow = (shouldOverflow) => {
      document.body.style.overflow = shouldOverflow ? "hidden" : "initial";
    };

    toggleBodyOverflow(isOpen);

    return () => {
      toggleBodyOverflow(false);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <BlurBackground />}
      <ModalOverlay isOpen={isOpen}>
        <>
          <VideoPlayer videoSource={project.videoSource} />
          <ModalContent>
            <CloseButton onClick={onClose}>
              <IoClose size={45} cursor="pointer" />
            </CloseButton>
            <Content>
              <Titulo>{project.title}</Titulo>
              <p>{project.description}</p>
            </Content>
            <Container>
              <Btn
                text="Ver no Linkedin"
                href={project.linkedin}
                target="_blank"
              />
              <Btn
                text="Repositório"
                href={project.repositorio}
                target="_blank"
              />
              {window.innerWidth <= 768 && <Btn text="Visualizar Projeto" />}
            </Container>
          </ModalContent>
        </>
      </ModalOverlay>
    </>
  );
}

export default ProjectModal;

import React from "react";
import styled from "styled-components";

import Fade from "react-reveal";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 250px;
  font-family: "Poppins", Sans-serif;
  margin-left: 2em;
  margin-bottom: 4em;

  background-image: ${(props) => props.theme.backgroundImage};
  border-radius: 10px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: none;
  }

  @media (max-width: 768px) {
    height: 230px;
    width: 330px;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`;

const Para = styled.p`
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  line-height: 1.4;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);s
  transition: opacity 0.3s ease;
  pointer-events: none;
  border-radius: 10px;

  ${CardWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
    border-radius: 10px;
`;

const CardButton = styled.button`
  font-family: "Poppins", Sans-serif;

  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 600;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  ${CardWrapper}:hover & {
    opacity: 1;
    scale: 1;
  }

  &:hover {
    box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    scale: 0.95;
  }
`;

const OverlayAfter = styled.div`
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.theme.backgroundImage};
  transition: transform 0.5s ease;

  ${CardWrapper}:hover & {
    transform: translate(-50%, -50%) scale(0);
  }
`;

const ProjectCards = ({ project, onClick }) => {
  return (
    <Fade left fraction={0.3} cascade>
      <CardWrapper className="card">
        <Heading className="heading">{project.title}</Heading>
        <Para className="para">{project.shortDescription}</Para>
        <Overlay className="overlay" />
        <CardButton onClick={onClick} className="card-btn">
          Ver Projeto
        </CardButton>
        <OverlayAfter />
      </CardWrapper>
    </Fade>
  );
};

export default ProjectCards;

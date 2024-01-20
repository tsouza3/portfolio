import React from "react";
import styled from "styled-components";

import Fade from "react-reveal";

const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  flex-basis: calc(33.33% - 2em);
  margin: 1em;

  &:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover .img-content {
    transform: scale(2.5) rotate(30deg);
    filter: blur(25px);
    fill: transparent;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const CardBefore = styled.div`
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: ${(props) => props.theme.backgroundImage};
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
`;

const ImgContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.backgroundImage};
  transition:
    transform 0.6s,
    filter 1s;
  transform-origin: center;
`;

const Icon = styled.svg`
  height: 50px;
  width: 50px;
  fill: #212121;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  font-family: "Arimo", sans-serif;
`;

const Heading = styled.p`
  font-size: 32px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
`;

const CardComponent = ({ titulo, descricao, icon }) => {
  return (
    <Fade left fraction={0.3} cascade>
      <CardContainer>
        <CardBefore />

        <Card>
          <ImgContent className="img-content">
            <Icon>
              <image className="icon" xlinkHref={icon} width="50" height="50" />
            </Icon>
          </ImgContent>
          <Content className="content">
            <Heading>{titulo}</Heading>
            <p>{descricao}</p>
          </Content>
        </Card>
      </CardContainer>
    </Fade>
  );
};

export default CardComponent;

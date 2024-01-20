import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 60%;
  margin: 1em;

  @media (max-width: 1055px) {
    display: none;
  }
`;

const VideoPlayer = ({ videoSource }) => {
  return (
    <VideoContainer>
      <video controls style={{ width: "100%" }}>
        <source src={videoSource} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </VideoContainer>
  );
};

export default VideoPlayer;

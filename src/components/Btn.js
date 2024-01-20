import styled from "styled-components";

import { Link } from "react-scroll";

const StyledLink = styled(Link)``;

const StyledButton = styled.a`
  align-items: center;
  background-image: ${(props) => props.theme.backgroundImage};
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;

  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:active,
  &:hover {
    outline: 0;
  }

  span {
    background-color: #fff;
    color: ${(props) => props.theme.color};
    padding: 16px 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }

  &:hover span {
    color: #fff;
    background: none;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Button = ({ to, text, href }) => {
  if (href) {
    return (
      <StyledButton href={href} target="_blank" rel="noopener noreferrer">
        <span>{text}</span>
      </StyledButton>
    );
  } else {
    return (
      <StyledLink to={to} smooth={true} duration={500} exact={true}>
        <StyledButton>
          <span>{text}</span>
        </StyledButton>
      </StyledLink>
    );
  }
};

export default Button;

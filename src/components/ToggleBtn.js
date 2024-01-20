import React, { useState } from "react";
import styled from "styled-components";

const SwitchLabel = styled.label`
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  --size-of-icon: 1.4em;
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: 0.4s;
  border-radius: 30px;
`;

const SliderBefore = styled.span`
  position: absolute;
  content: "";
  height: var(--size-of-icon, 1.4em);
  width: var(--size-of-icon, 1.4em);
  border-radius: 20px;
  left: ${(props) =>
    props.checked
      ? "calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)))"
      : "var(--slider-offset,0.3em)"};
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
  transition: 0.4s;

  ${(props) =>
    props.checked &&
    `
    background: linear-gradient(40deg, #0080ff, #8c00ff 70%);
  `};
`;

const StyledSwitch = ({ theme, toggleTheme }) => {
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleSwitchChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    toggleTheme(newChecked ? "dark" : "light");
  };

  return (
    <SwitchLabel className="switch">
      <SwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleSwitchChange}
      />
      <Slider className="slider">
        <SliderBefore checked={isChecked} />
      </Slider>
    </SwitchLabel>
  );
};

export default StyledSwitch;

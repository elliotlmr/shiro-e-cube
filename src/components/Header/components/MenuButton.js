import styled, { keyframes } from "styled-components";
import LampMenu from "../../../images/lamp-menu.png";
import LampCross from "../../../images/lamp-cross.png";

const buttonAnimation = keyframes`
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(10%);
    }
    100% {
        transform: translateY(0%);
    }
`;

const Button = styled.img`
  z-index: 100;
  transition: all 0.2s ease-in-out;
  position: absolute;
  right: 20px;
  top: -20px;
  height: 150px;
  filter: drop-shadow(0 0 30px var(--color-light));
  cursor: pointer;
  &:hover {
    filter: drop-shadow(0 0 20px var(--color-light));
  }
  &.animated-button {
    animation: ${buttonAnimation} 0.5s ease-in-out;
  }
`;

export default function MenuButton(props) {
  function handleMenu() {
    let menuButton = document.getElementById("menu-button");
    menuButton.classList.remove("animated-button");
    void menuButton.offsetWidth;
    menuButton.classList.add("animated-button");
    props.isOpened ? props.setIsOpened(false) : props.setIsOpened(true);
  }

  return (
    <Button
      src={props.isOpened ? LampCross : LampMenu}
      onClick={handleMenu}
      id="menu-button"
    />
  );
}

import styled from "styled-components";
import CharSprite from "../../../images/character.png";

const CharContainer = styled.div`
  position: absolute;
  bottom: 3%;
  right: 5%;
  width: 190px;
  overflow: hidden;
  filter: drop-shadow(0 0 3px var(--color-dark));
  &:hover {
    filter: drop-shadow(0 0 2px var(--color-light));
  }
`;

const Sprite = styled.img`
  position: relative;
  height: 320px;
  &:hover {
    left: -190px;
  }
`;

export default function Character() {
  function BasicAnimation() {
    let png = document.getElementById("character-sprite");
    if (png) {
      png.style.left = `0px`;
      setTimeout(function () {
        png.style.left = `-190px`;
      }, 300);
      setTimeout(function () {
        png.style.left = `-380px`;
      }, 600);
      setTimeout(function () {
        png.style.left = `0px`;
      }, 900);
      setTimeout(function () {
        BasicAnimation();
      }, 1500);
    }
  }

  return (
    <CharContainer>
      <Sprite src={CharSprite} id='character-sprite' onLoad={BasicAnimation} />
    </CharContainer>
  );
}

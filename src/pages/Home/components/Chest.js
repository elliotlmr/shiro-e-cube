import styled from "styled-components";
import ChestImg from "../../../images/CV_chest.png";
import CV from '../../../images/CV_Elliot_Lemaire.pdf';

const ChestContainer = styled.div`
z-index: 2;
  position: absolute;
  bottom: 3%;
  right: 15%;
  width: 120px;
  overflow-x: hidden;
  filter: drop-shadow(0 0 2px var(--color-dark));
  &:hover {
    filter: drop-shadow(0 0 2px var(--color-light));
  }
`;

const Sprite = styled.img`
  position: relative;
  height: 150px;
  &:hover {
    left: -120px;
  }
`;

export default function Chest() {
   
    function chestAnimationOver() {
        let chest = document.getElementById('chest');
        for (let i = 0; i < 4; i++) {
            setTimeout(function() {
                chest.style.left = `${-120 - (120 * i)}px`
            }, 50 * i)
        }
    }

    function chestAnimationOut() {
        let chest = document.getElementById('chest');
        for (let i = 0; i < 5; i++) {
            setTimeout(function() {
                chest.style.left = `${-480 + (120 * i)}px`
            }, 50 * i)
        }
    }
    
  return (
    <ChestContainer>
      <a href={CV} download>
      <Sprite src={ChestImg} id='chest' onMouseOver={chestAnimationOver} onMouseOut={chestAnimationOut} />
      </a>
    </ChestContainer>
  );
}

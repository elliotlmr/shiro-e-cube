import styled from "styled-components";
import tvPng from "../../../images/television.png";
import GaleryNav from "./GaleryNav";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: 550px;
  height: 500px;
`;

const Sprite = styled.img`
  width: 550px;
  filter: drop-shadow(0 0 3px var(--color-dark));
`;

export default function Television(props) {
  return (
    <Container>
      <GaleryNav
        globalIndex={props.globalIndex}
        setGlobalIndex={props.setGlobalIndex}
      />
      <Sprite src={tvPng} />
    </Container>
  );
}

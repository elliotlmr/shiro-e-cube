import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  right: 3%;
  height: 120px;
  width: 240px;
  background-color: var(--color-light);
  border-radius: 3%;
  filter: drop-shadow(0 0 2px var(--color-dark));
`;

const Pointer = styled.div`
  position: absolute;
  bottom: -15px;
  right: 20%;
  height: 40px;
  width: 40px;
  background: var(--color-light);
  margin: 0 auto;
  transform: rotate(45deg);
  border-radius: 0 0 5px 0;
`;

const Text = styled.p`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: justify;
  margin: 15px;
  color: var(--color-dark);
`;

export default function Bubble(props) {

  useEffect(() => {
    setTimeout(() => {
      props.setDisplay(false)
    }, 3000)
  }, [props.display, props]);

  return (
    <>
      {props.display && (
        <Container>
          <Text>
            You can use the controller or your mouse to interact with the cube !
          </Text>
          <Pointer />
        </Container>
      )}
    </>
  );
}

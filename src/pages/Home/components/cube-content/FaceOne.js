import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  background: linear-gradient(
      0deg,
      rgba(255, 103, 2, 1) 0%,
      rgba(232, 23, 154, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 0 2px var(--color-dark));
`;

const Text = styled.p`
  font-size: 1rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  background: linear-gradient(
      0deg,
      rgba(255, 103, 2, 1) 0%,
      rgba(232, 23, 154, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 0 2px var(--color-dark));
`;

const IconContainer = styled.div`
  display: block;
  font-size: 3rem;
  color: #505050;
`;

export default function faceOne() {
  return (
    <>
      <Title>Web Developer</Title>
      <IconContainer>
        <i className="bi bi-arrow-bar-left"></i>
        <i className="bi bi-mouse"></i>
        <i className="bi bi-arrow-bar-right"></i>
      </IconContainer>
      <Text>- Profile Cube -</Text>
    </>
  );
}

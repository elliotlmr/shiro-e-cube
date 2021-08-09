import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  margin: 0 10px;
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

const Container = styled.div`
margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70%;
  width: 95%;
  border: 2px solid var(--color-dark);
`;

const Subtitle = styled.h3`
  font-size: 1.1rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  color: var(--color-light);
  filter: drop-shadow(1px 0 2px var(--color-dark));
  margin: 0 20px;
`;

export default function FaceFour() {
  return (
    <>
      <Title>Frontend creativity</Title>
      <Container>
        <Subtitle>S.E.O.</Subtitle>
        <Subtitle>UI | UX Design</Subtitle>
        <Subtitle>CSS Animations</Subtitle>
        <Subtitle>Javascript interactions</Subtitle>
      </Container>
    </>
  );
}

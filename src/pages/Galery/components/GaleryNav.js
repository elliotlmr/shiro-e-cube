import styled from "styled-components";

const Container = styled.div`
  z-index: 2;
  position: absolute;
  top: 68px;
  left: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 258px;
  background-color: rgba(15, 15, 15, 0.3);
  border: 5px ridge var(--color-light);
  padding-bottom: 10px;
`;

const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.2rem;
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
  margin: 10px 0;
`;

const GaleryLink = styled.button`
  background: none;
  border: none;
  width: 100%;
  font-size: 0.9rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  color: var(--color-light);
  filter: drop-shadow(1px 0 2px var(--color-dark));
  &:hover {
    & span {
      opacity: 1;
    }
  }
  &:active {
    background: linear-gradient(
      0deg,
      rgba(255, 103, 2, 1) 0%,
      rgba(232, 23, 154, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 0 2px var(--color-dark));
  }
`;

const LinkArrow = styled.span`
  opacity: 0;
`;

export default function GaleryNav(props) {
  function handleIndex(index) {
    props.setGlobalIndex(index);
  }

  return (
    <Container>
      <Title>School Projects</Title>
      <Subcontainer>
        <GaleryLink onClick={() => handleIndex('0')}>
          <LinkArrow>➤ </LinkArrow>
          API | SoPekocko
        </GaleryLink>
        <GaleryLink onClick={() => handleIndex(1)}>
          <LinkArrow>➤ </LinkArrow>SEO | La Chouette Agence
        </GaleryLink>
        <GaleryLink onClick={() => handleIndex(2)}>
          <LinkArrow>➤ </LinkArrow>API + UI/UX | Orinoco
        </GaleryLink>
        <GaleryLink onClick={() => handleIndex(3)}>
          <LinkArrow>➤ </LinkArrow>API + UI/UX | Groupomania
        </GaleryLink>
      </Subcontainer>
      <Title>Personnal Projects</Title>
      <Subcontainer>
        <GaleryLink onClick={() => handleIndex(4)}>
          <LinkArrow>➤ </LinkArrow>Portfolio
        </GaleryLink>
        <GaleryLink onClick={() => handleIndex(5)}>
          <LinkArrow>➤ </LinkArrow>Work In Progress
        </GaleryLink>
      </Subcontainer>
    </Container>
  );
}

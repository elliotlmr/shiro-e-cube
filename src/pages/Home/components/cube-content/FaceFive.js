import styled from "styled-components";

const Title = styled.h3`
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
  margin: 10px;
`;

const Container = styled.div`
  &.sns-links {
    display: flex;
    justify-content: space-around;
    margin: 20px;
    font-size: 2.5rem;
  }
  a {
      color: var(--color-light);
      filter: drop-shadow(1px 0 2px var(--color-dark));
      &:active {
        color: var(--color-dark);
      }
  }
`;

const Text = styled.p`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  color: var(--color-light);
  filter: drop-shadow(1px 0 2px var(--color-dark));
  margin: 0 30px;
  text-align: justify;
`;

const Item = styled.span`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  background: rgb(246, 147, 0);
  background: linear-gradient(
    45deg,
    rgba(246, 147, 0, 1) 0%,
    rgba(255, 209, 0, 1) 52%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 0 2px var(--color-dark));
`;

export default function FaceFive() {
  return (
    <>
      <Title>More about me ?</Title>
      <Text>
        Find the legendary <br />
        <Item>C.V. Coin</Item> in the chest below this cube.
      </Text>
      <Container>
        <Text>
          You can also explore further lands following these directions :
        </Text>
        <Container className="sns-links">
          <a target='_blank' rel='noreferrer' href="https://github.com/elliotlmr">
            <i className="bi bi-github"></i>
          </a>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/elliot-lemaire/">
            <i className="bi bi-linkedin"></i>
          </a>
        </Container>
      </Container>
    </>
  );
}

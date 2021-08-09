import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const animatedLink = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
`;

const Title = styled.h3`
  margin: 20px 0;
  font-size: 2rem;
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
  margin: 20px 0;
  position: relative;
  left: -10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
`;

const OptionLink = styled(Link)`
  transition: all 0.3s ease-in-out;
  color: var(--color-light);
  font-size: 2rem;
  font-family: "Unibody", "Orbitron", Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  color: var(--color-light);
  filter: drop-shadow(0 0 2px var(--color-dark));
  &:hover {
    animation: ${animatedLink} 0.7s ease-in-out infinite;
    background: linear-gradient(
      0deg,
      rgba(255, 103, 2, 1) 0%,
      rgba(232, 23, 154, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    & span {
      opacity: 1;
    }
  }
`;

const LinkArrow = styled.span`
  opacity: 0;
`;

export default function FaceSix() {
  return (
    <>
      <Title>Options</Title>
      <Container>
        <OptionLink to='/galery'>
          <LinkArrow>➤ </LinkArrow>
          Galery
        </OptionLink>
        <OptionLink to='/contact'>
          <LinkArrow>➤ </LinkArrow>
          Contact
        </OptionLink>
      </Container>
    </>
  );
}

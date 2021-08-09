import styled, { keyframes } from "styled-components";

const animatedTitle = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(1);
    }
`;

const Title = styled.h3`
  animation: ${animatedTitle} 2s infinite ease-in-out;
  font-size: 4rem;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  background: linear-gradient(
    0deg,
    rgba(255, 103, 2, 1) 0%,
    rgba(232, 23, 154, 1) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(1px 0 5px var(--color-dark));
  text-align: center;
  margin-bottom: 80px;
`;

export default function ProjectTitle(props) {
  const titleArray = [
    "So Pekocko",
    "La Chouette Agence",
    "Orinoco",
    "Groupomania",
    "Portfolio",
    "W.I.P.",
  ];

  return <Title>{props.globalIndex ? titleArray[props.globalIndex] : 'Select a Project'}</Title>;
}

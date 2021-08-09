import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Subcontainer = styled.div`
  width: 90%;
  background-color: rgba(15, 15, 15, 0.3);
  border: 5px ridge var(--color-light);
  margin: 30px 0 35px 0;
  &.vitrine-text {
    height: 15%;
    margin: 30px 0 25px 0;
  }
  &.vitrine-carousel {
    height: 55%;
  }
`;

const Text = styled.p``;

const Carousel = styled.div``;

const Image = styled.img``;

export default function Vitrine() {
  const textArray = [
    "So Pekocko",
    "La Chouette Agence",
    "Orinoco",
    "Groupomania",
    "Portfolio",
    "W.I.P.",
  ];

  // const imagesArray = [
  //   [SP1, SP2, SP3],
  //   [LCA1, LCA2, LCA3],
  //   [O1, O2, O3],
  //   [G1, G2, G3],
  //   [P1, P2, P3],
  //   [WIP],
  // ];

  return (
    <Container>
      <Subcontainer className="vitrine-text"></Subcontainer>
      <Subcontainer className="vitrine-carousel"></Subcontainer>
    </Container>
  );
}

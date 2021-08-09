import { useState } from "react";
import styled from "styled-components";
import GaleryNav from "./components/GaleryNav";
import ProjectTitle from "./components/ProjectTitle";
import Television from "./components/Television";
import Vitrine from "./components/Vitrine";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
`;

const Subcontainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export default function Galery() {
  const [globalIndex, setGlobalIndex] = useState(null);

  return (
    <Container>
      <Subcontainer>
        <ProjectTitle globalIndex={globalIndex} />
        <Television
          globalIndex={globalIndex}
          setGlobalIndex={setGlobalIndex}
        />
      </Subcontainer>
      <Subcontainer>
        <Vitrine />
      </Subcontainer>
    </Container>
  );
}

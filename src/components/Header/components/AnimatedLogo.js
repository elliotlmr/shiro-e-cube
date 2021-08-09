import styled from "styled-components";

//${props => props.isOpened ? '' : '' };

const LogoContainer = styled.div`
  width: ${(props) => (props.isOpened ? "80vw" : "100px")};
  height: 120px;
  filter: drop-shadow(0 0 2px white);
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  margin: auto;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.isOpened ? "scale(1)" : "scale(0.8)")};
`;

const LeftBottom = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 0;
`;

const Left = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 77.5px;
  width: 0;
  border-top: 18px solid transparent;
  border-left: 18px solid var(--color-light);
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  height: 0;
  width: 77.5px;
  border-bottom: 18px solid var(--color-light);
  border-right: 18px solid transparent;
`;

const RightTop = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 20px;
  right: 0;
`;

const Right = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 77.5px;
  width: 0;
  border-bottom: 18px solid transparent;
  border-right: 18px solid var(--color-light);
  border-top-right-radius: 2%;
`;

const Top = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 0;
  width: 77.5px;
  border-top: 18px solid var(--color-light);
  border-left: 18px solid transparent;
  border-top-right-radius: 2%;
`;

const Middle = styled.div`
  opacity: ${(props) => (props.isOpened ? "0" : "1")};
  position: absolute;
  top: 62.5px;
  left: 35px;
  width: 30px;
  height: 15px;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpened ? "skewX(45deg) translateY(-100%)" : "skewX(45deg)"};
  background-color: var(--color-light);
`;

const Comma = styled.div`
  opacity: ${(props) => (props.isOpened ? "0" : "1")};
  position: absolute;
  top: -2px;
  left: 45px;
  height: 15px;
  width: 10px;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpened ? "skewY(-45deg) translateY(-100%)" : "skewY(-45deg)"};
  background-color: var(--color-light);
`;

export default function AnimatedLogo(props) {

  return (
    <LogoContainer isOpened={props.isOpened} >
      <LeftBottom>
        <Left />
        <Bottom />
      </LeftBottom>
      <Comma isOpened={props.isOpened} />
      <Middle isOpened={props.isOpened} />
      <RightTop>
        <Right />
        <Top />
      </RightTop>
    </LogoContainer>
  );
}

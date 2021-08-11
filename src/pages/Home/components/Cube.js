import { useEffect, useState } from "react";
import styled from "styled-components";
import Sness from "../../../images/controller.png";
import Reload from "../../../images/reload.png";
import FaceOne from "./cube-content/FaceOne";
import FaceTwo from "./cube-content/FaceTwo";
import FaceFour from "./cube-content/FaceFour";
import FaceThree from "./cube-content/FaceThree";
import FaceFive from "./cube-content/FaceFive";
import FaceSix from "./cube-content/FaceSix";

const CubeContainer = styled.div`
  z-index: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  filter: drop-shadow(0 50px 50px black);
`;

const CubeModel = styled.div`
  height: 400px;
  width: 400px;
  margin: auto;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-5deg) rotateY(-2deg) rotateZ(0deg);
  transition: all 0.1s linear;
`;

const CubeFace = styled.div`
  position: absolute;
  transition: all 0.1s linear;
  height: 400px;
  width: 400px;
  float: left;
  overflow: hidden;
  background-color: var(--color-dark-soft);
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  &.face-one {
    transform: translateX(0px) translateY(0px) translateZ(200px);
  }
  &.face-two {
    transform: rotateY(90deg) translateX(0px) translateY(0px) translateZ(200px);
  }
  &.face-three {
    justify-content: center;
    transform: rotateY(180deg) translateX(0px) translateY(0px) translateZ(200px);
  }
  &.face-four {
    justify-content: center;
    transform: rotateY(-90deg) translateX(0px) translateY(0px) translateZ(200px);
  }
  &.face-five {
    transform: rotateX(90deg) translateX(0px) translateY(0px) translateZ(200px);
  }
  &.face-six {
    justify-content: center;
    transform: rotateX(-90deg) translateX(0px) translateY(0px) translateZ(200px);
  }
`;

const ControllerContainer = styled.div`
  transform: scale(1.5);
  position: absolute;
  left: 15%;
  bottom: 7%;
  height: 100px;
  width: 200px;
  border: 1px solid var(--color-dark);
  box-shadow: 0 0 5px var(--color-dark);
  cursor: move;
`;

const Controller = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
`;

const ControlButton = styled.button`
  cursor: pointer;
  position: absolute;
  background: none;
  border: none;
  color: var(--color-light);
  &:active {
    color: var(--color-dark);
  }
  &.zoom-in {
    top: 67px;
    right: 15px;
  }
  &.zoom-out {
    top: 67px;
    right: 43px;
  }
  &.reset {
    top: 57px;
    right: 81px;
  }
  &.rotate-top {
    width: 12px;
    height: 18px;
    top: 38px;
    left: 30px;
  }
  &.rotate-right {
    width: 18px;
    height: 14px;
    top: 56px;
    left: 43px;
  }
  &.rotate-bottom {
    width: 12px;
    height: 18px;
    top: 69px;
    left: 30px;
  }
  &.rotate-left {
    width: 18px;
    height: 14px;
    top: 56px;
    left: 13px;
  }
`;

const ReloadMatter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 95%;
  margin: auto;
  overflow: hidden;
  border-radius: 50px;
  background: #333333;
  border: 1px solid var(--color-dark);
  box-shadow: inset -20px 20px 60px #212121, inset 20px -20px 60px #454545;
`;

const ReloadContainer = styled.div`
  height: 32px;
  width: 32px;
  overflow: hidden;
  position: relative;
`;

const ReloadImg = styled.img`
  position: absolute;
  height: 32px;
  width: auto;
  left: 0;
`;

export default function Cube(props) {
  const [currentSize, setCurrentSize] = useState(400);
  const [currentTransZ, setCurrentTransZ] = useState(200);
  const [isLocked, setIsLocked] = useState(false);
  const [handleResize, setHandleResize] = useState(false);

  useEffect(() => {
    rotateCube(document.getElementById("cube"));

    // Rotate function :
    function rotateCube(cube) {
      var mouseX0 = 0,
        mouseY0 = 0,
        mouseX1 = 0,
        mouseY1 = 0;

      if (isLocked === true) {
        cube.onmousedown = closeDragElement;
      }
      if (isLocked === false) {
        cube.onmousedown = dragMouseDown;
        cube.ontouchstart = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        mouseX0 = e.clientX;
        mouseY0 = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Get new cursor position :
        mouseX1 = e.clientX - mouseX0;
        mouseY1 = (e.clientY - mouseY0) * -1;
        //Set the new cube position :
        cube.style.transform =
          "rotateX(" + mouseY1 / 2 + "deg) rotateY(" + mouseX1 / 2 + "deg)";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
      }
    }
  }, [isLocked]);

  useEffect(() => {
    MoveController(document.getElementById("controller"));

    // Move controller function :
    function MoveController(controller) {
      var mouseX0 = 0,
        mouseY0 = 0,
        mouseX1 = 0,
        mouseY1 = 0;

      controller.onmousedown = dragMouseDown;
      controller.ontouchstart = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        mouseX0 = e.clientX;
        mouseY0 = e.clientY;
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // Get new cursor position :
        mouseX1 = mouseX0 - e.clientX;
        mouseY1 = mouseY0 - e.clientY;
        mouseX0 = e.clientX;
        mouseY0 = e.clientY;
        //Set the new controller position :
        controller.style.top = controller.offsetTop - mouseY1 + "px";
        controller.style.left = controller.offsetLeft - mouseX1 + "px";
        controller.style.right = "auto";
      }

      function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
      }
    }
  }, []);

  function initCube() {
    document.getElementById("cube").style.transform =
      "rotateX(-25deg) rotateY(-25deg) rotateZ(0deg)";
  }

  function handleZoomIn() {
    setHandleResize(true);
    let faces = document.getElementsByClassName("face");
    document.getElementById("cube").style.height = currentSize + 50 + "px";
    document.getElementById("cube").style.width = currentSize + 50 + "px";
    for (let face of faces) {
      face.style.height = currentSize + 50 + "px";
      face.style.width = currentSize + 50 + "px";
    }
    document.getElementsByClassName("face-one")[0].style.transform =
      "translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    document.getElementsByClassName("face-two")[0].style.transform =
      "rotateY(90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    document.getElementsByClassName("face-three")[0].style.transform =
      "rotateY(180deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    document.getElementsByClassName("face-four")[0].style.transform =
      "rotateY(-90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    document.getElementsByClassName("face-five")[0].style.transform =
      "rotateX(90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    document.getElementsByClassName("face-six")[0].style.transform =
      "rotateX(-90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ + 25) +
      "px)";
    setCurrentSize(currentSize + 50);
    setCurrentTransZ(currentTransZ + 25);
    setTimeout(function () {
      setHandleResize(false);
    }, 1000);
  }

  function handleZoomOut() {
    setHandleResize(true);
    let faces = document.getElementsByClassName("face");
    document.getElementById("cube").style.height = currentSize - 50 + "px";
    document.getElementById("cube").style.width = currentSize - 50 + "px";
    for (let face of faces) {
      face.style.height = currentSize - 50 + "px";
      face.style.width = currentSize - 50 + "px";
    }
    document.getElementsByClassName("face-one")[0].style.transform =
      "translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    document.getElementsByClassName("face-two")[0].style.transform =
      "rotateY(90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    document.getElementsByClassName("face-three")[0].style.transform =
      "rotateY(180deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    document.getElementsByClassName("face-four")[0].style.transform =
      "rotateY(-90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    document.getElementsByClassName("face-five")[0].style.transform =
      "rotateX(90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    document.getElementsByClassName("face-six")[0].style.transform =
      "rotateX(-90deg) translateX(0px) translateY(0px) translateZ(" +
      (currentTransZ - 25) +
      "px)";
    setCurrentSize(currentSize - 50);
    setCurrentTransZ(currentTransZ - 25);
    setTimeout(function () {
      setHandleResize(false);
    }, 1000);
  }

  function resetCube() {
    let model = document.getElementById("cube");
    model.style.transform = "rotateX(-5deg) rotateY(-2deg) rotateZ(0deg)";
  }

  function rotateTop() {
    let model = document.getElementById("cube");
    let currentPosition = model.style.transform.split(" ");
    currentPosition[0] = currentPosition[0].split("(")[1].split("d")[0];
    currentPosition[1] = currentPosition[1].split("(")[1].split("d")[0];
    model.style.transform = `rotateX(${currentPosition[0] - 90}deg) rotateY(${
      currentPosition[1]
    }deg)`;
  }
  function rotateRight() {
    let model = document.getElementById("cube");
    let currentPosition = model.style.transform.split(" ");
    currentPosition[0] = currentPosition[0].split("(")[1].split("d")[0];
    currentPosition[1] = currentPosition[1].split("(")[1].split("d")[0];
    model.style.transform = `rotateX(${currentPosition[0]}deg) rotateY(${
      Number(currentPosition[1]) - 90
    }deg)`;
  }
  function rotateBottom() {
    let model = document.getElementById("cube");
    let currentPosition = model.style.transform.split(" ");
    currentPosition[0] = currentPosition[0].split("(")[1].split("d")[0];
    currentPosition[1] = currentPosition[1].split("(")[1].split("d")[0];
    model.style.transform = `rotateX(${
      Number(currentPosition[0]) + 90
    }deg) rotateY(${currentPosition[1]}deg)`;
  }
  function rotateLeft() {
    let model = document.getElementById("cube");
    let currentPosition = model.style.transform.split(" ");
    currentPosition[0] = currentPosition[0].split("(")[1].split("d")[0];
    currentPosition[1] = currentPosition[1].split("(")[1].split("d")[0];
    model.style.transform = `rotateX(${currentPosition[0]}deg) rotateY(${
      Number(currentPosition[1]) + 90
    }deg)`;
  }

  function LockFaceTwo() {
    let model = document.getElementById("cube");
    model.style.transform = "rotateX(0deg) rotateY(-90deg) rotateZ(0deg)";
  }

  if (isLocked) {
    LockFaceTwo();
  }

  function ReloadAnimation() {
    let png = document.getElementById("reloader");
    if (png) {
      png.style.left = `0px`;
      setTimeout(function () {
        png.style.left = `-32px`;
      }, 125);
      setTimeout(function () {
        png.style.left = `-64px`;
      }, 250);
      setTimeout(function () {
        ReloadAnimation();
      }, 375);
    }
  }

  return (
    <CubeContainer onLoad={initCube}>
      <CubeModel id="cube" className="cubeClass">
        <CubeFace className="face face-one">
          <FaceOne />
        </CubeFace>
        <CubeFace className="face face-two">
          {handleResize && (
            <ReloadMatter>
              <ReloadContainer>
                <ReloadImg
                  src={Reload}
                  id="reloader"
                  onLoad={ReloadAnimation}
                />
              </ReloadContainer>
            </ReloadMatter>
          )}
          {!handleResize && (
            <FaceTwo
              isLocked={isLocked}
              setIsLocked={setIsLocked}
              currentSize={currentSize}
            />
          )}
        </CubeFace>
        <CubeFace className="face face-three">
          <FaceThree />
        </CubeFace>
        <CubeFace className="face face-four">
          <FaceFour />
        </CubeFace>
        <CubeFace className="face face-five">
          <FaceFive />
        </CubeFace>
        <CubeFace className="face face-six">
          <FaceSix />
        </CubeFace>
      </CubeModel>
      <ControllerContainer id="controller">
        <Controller src={Sness} />
        <ControlButton
          type="button"
          name="Zoom In"
          className="zoom-in"
          onClick={handleZoomIn}
        >
          <i className="bi bi-zoom-in"></i>
        </ControlButton>
        <ControlButton
          type="button"
          name="Zoom Out"
          className="zoom-out"
          onClick={handleZoomOut}
        >
          <i className="bi bi-zoom-out"></i>
        </ControlButton>
        <ControlButton
          type="button"
          name="Reset Position"
          className="reset"
          onClick={resetCube}
        >
          <i className="bi bi-arrow-repeat"></i>
        </ControlButton>
        <ControlButton
          type="button"
          name="Rotate Top"
          className="rotate-top"
          onClick={rotateTop}
        />
        <ControlButton
          type="button"
          name="Rotate Right"
          className="rotate-right"
          onClick={rotateRight}
        />
        <ControlButton
          type="button"
          name="Rotate Bottom"
          className="rotate-bottom"
          onClick={rotateBottom}
        />
        <ControlButton
          type="button"
          name="Rotate Left"
          className="rotate-left"
          onClick={rotateLeft}
        />
      </ControllerContainer>
    </CubeContainer>
  );
}

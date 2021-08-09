import styled from "styled-components";
import Matter from "matter-js";
import { useEffect, useState } from "react";
import Bootstrap from "../../../../images/skills/bootstrap.png";
import Css from "../../../../images/skills/css.png";
import Github from "../../../../images/skills/github.png";
import Heroku from "../../../../images/skills/heroku.png";
import Html from "../../../../images/skills/html.png";
import Js from "../../../../images/skills/js.png";
import Node from "../../../../images/skills/node.png";
import Npm from "../../../../images/skills/npm.png";
import ReactLogo from "../../../../images/skills/react.png";

const SkillBox = styled.div`
  cursor: pointer;
  height: 95%;
  width: 95%;
  margin: auto;
  overflow: hidden;
  border-radius: 50px;
  background: #333333;
  border: 1px solid var(--color-dark);
  box-shadow: inset -20px 20px 60px #212121, inset 20px -20px 60px #454545;
`;

const Title = styled.h2`
  position: absolute;
  top: 10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  color: #505050;
`;

const Locker = styled.div`
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  right: 10%;
  height: 40px;
  width: 40px;
  font-size: 1.5rem;
  color: var(--color-light-soft);
  border-radius: 50px;
  background: linear-gradient(225deg, #373737, #2e2e2e);
  box-shadow: -9px 9px 18px #1f1f1f, 9px -9px 18px #474747;
  &:active {
    border-radius: 50px;
    background: #333333;
    box-shadow: inset -9px 9px 18px #1f1f1f, inset 9px -9px 18px #474747;
  }
`;

export default function FaceTwo(props) {
  const [stringContent, setStringContent] = useState("Skills");

  useEffect(() => {
    var size = props.currentSize;

    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create();

    var render = Render.create({
      element: document.getElementById("skill-box"),
      engine: engine,
      options: {
        height: size * 0.95,
        width: size * 0.95,
        wireframes: false,
        background: "transparent",
      },
    });

    World.add(engine.world, [
      //Platforms || x y width height
      Bodies.rectangle(size * 0.25, size / 3, size * 0.6, 10, {
        isStatic: true,
        angle: Math.PI * 0.06,
        render: {
          fillStyle: "#0e0e0e",
        },
      }),
      Bodies.rectangle(size * 0.8, size / 1.7, size * 0.5, 10, {
        isStatic: true,
        angle: Math.PI * -0.06,
        render: {
          fillStyle: "#0e0e0e",
        },
      }),
      //Ground
      Bodies.rectangle(size / 2, size * 0.95, size, 10, {
        isStatic: true,
        render: {
          fillStyle: "#0e0e0e",
        },
      }),
      Bodies.rectangle(size, size * 0.9, 10, 100, {
        isStatic: true,
        render: {
          fillStyle: "#0e0e0e",
        },
      }),
      Bodies.rectangle(-6, size * 0.9, 10, 100, {
        isStatic: true,
        render: {
          fillStyle: "#0e0e0e",
        },
      }),
    ]);

    //Mouse controls
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    let pngArray = [
      Html,
      Css,
      Js,
      ReactLogo,
      Node,
      Npm,
      Github,
      Heroku,
      Bootstrap,
    ];
    let stringArray = [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Node.js",
      "NPM",
      "GitHub",
      "Heroku",
      "Bootstrap",
    ];
    let currentIndex = 0;

    Matter.Events.on(mouseConstraint, "mousedown", function (e) {
      World.add(
        engine.world,
        Bodies.circle(120, 40, 25, {
          restitution: 0.7,
          render: {
            sprite: {
              texture: pngArray[currentIndex],
              xScale: 0.2,
              yScale: 0.2,
            },
          },
        })
      );
      setStringContent(stringArray[currentIndex]);
      currentIndex === 8 ? (currentIndex = 0) : currentIndex++;
    });

    Matter.Runner.run(engine);

    Render.run(render);
  }, [props.currentSize]);

  function handleLock() {
    props.isLocked ? props.setIsLocked(false) : props.setIsLocked(true);
  }

  return (
    <SkillBox id="skill-box">
      <Title>{stringContent}</Title>
      <Locker onClick={handleLock}>
        {!props.isLocked && <i className="bi bi-unlock"></i>}
        {props.isLocked && <i className="bi bi-lock"></i>}
      </Locker>
    </SkillBox>
  );
}

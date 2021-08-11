import styled from "styled-components";
import SP1 from "../../../images/vitrine/piquante-home.png";
import SP2 from "../../../images/vitrine/piquante-sauce.png";
import SP3 from "../../../images/vitrine/piquante-create.png";
import LCA1 from "../../../images/vitrine/lca-home.png";
import LCA2 from "../../../images/vitrine/lca-contact.png";
import LCA3 from "../../../images/vitrine/lca-test.png";
import O1 from "../../../images/vitrine/orinoco-home.png";
import O2 from "../../../images/vitrine/orinoco-product.png";
import O3 from "../../../images/vitrine/orinoco-cart.png";
import G1 from "../../../images/vitrine/gp-login.png";
import G2 from "../../../images/vitrine/gp-home.png";
import G3 from "../../../images/vitrine/gp-profile.png";
import { useEffect, useState } from "react";
import P1 from "../../../images/vitrine/portfolio-home.png";
import P2 from "../../../images/vitrine/portfolio-galery.png";
import P3 from "../../../images/vitrine/portfolio-galery.png";
import WIP from "../../../images/vitrine/wip.png";

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
    &::-webkit-scrollbar {
      width: 5px;
    }
    @media (max-width: 800px) {
      overflow-y: scroll;
    }
  }
  &.vitrine-carousel {
    position: relative;
    height: 55%;
    overflow-x: hidden;
  }
`;

const Text = styled.p`
  font-family: "Unibody", Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  text-align: justify;
  color: var(--color-light);
  filter: drop-shadow(0 0 2px var(--color-dark));
  margin: 5px;
  @media (max-width: 1024px) {
    font-size: 0.7rem;
  }
  @media (max-width: 800px) {
    font-size: 0.6rem;
  }
`;

const Carousel = styled.div`
  transition: left 0.3s ease-in-out;
  position: relative;
  width: 300%;
  height: 100%;
  left: 0;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
`;

const ImageContainer = styled.div`
  width: calc(100% / 3);
  display: flex;
  align-items: flex-start;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: var(--color-light);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-dark);
  }
`;

const Image = styled.img`
  width: 100%;
  margin: auto;
`;

const Button = styled.button`
  z-index: 2;
  position: absolute;
  top: 45%;
  height: 50px;
  width: 50px;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  color: var(--color-light);
  filter: drop-shadow(0 0 3px var(--color-dark));
  &.carousel-left-btn {
    left: 5%;
  }
  &.carousel-right-btn {
    right: 5%;
  }
  &:active {
    color: rgba(255, 103, 2, 1);
  }
`;

export default function Vitrine(props) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    let carousel = document.getElementById("vitrine-carousel");
    let leftBtn = document.getElementById("carousel-left-btn");
    let rightBtn = document.getElementById("carousel-right-btn");

    if (carousel && leftBtn && rightBtn) {
      if (imageIndex == 0) {
        carousel.style.left = "0";
        leftBtn.style.display = "none";
      }
      if (imageIndex == 1) {
        carousel.style.left = "-100%";
        leftBtn.style.display = "initial";
        rightBtn.style.display = "initial";
      }
      if (imageIndex == 2) {
        carousel.style.left = "-200%";
        rightBtn.style.display = "none";
      }
      if (!imagesArray[props.globalIndex][1]) {
        setImageIndex(0);
      }
    }
  }, [imageIndex]);

  const textArray = [
    "This project was about creating an API in order to be able to post, modify and delete 'sauce recipes' for sharing with other users. People could at the end like, dislike a recipe from other users. A moderator account was also needed.",
    "This project was about optimizing a website that was already created. I had mainly to reorganize the HTML code, compress the JS code, compress images, replace the black-hat code into S.E.O firendly one, and finally make the website accessible.",
    "This project was about designing a user interface, for an e-commerce website, able to display the content from a provided API. I created a minimalist interface displaying each item on sale on a single page item list. This website was indeed following the S.E.O good practices.",
    "This project was about creating an entire social media website for a company. It was probably the most complete project, as I had to develop both backend and frontend parts of the application (using React.js). Manipulating an SQL database was the most challenging part of the project.",
    "This portfolio is an original version of a basic portfolio. I wanted to practice my JS, CSS and React skills, by creating something special. I enjoyed to discover Matter.js and some new CSS tricks. However, I will in the future create a minimalist version of my portfolio, which could be more attractive visually.",
    "I am currently working on two different projects. The first one is to build a website for a freelance landscaper (user interface & moderator API to post content). The second is about developing an artist website, allowing its owner to post media content and art creation, in order to let users to download them.",
  ];

  const imagesArray = [
    [SP1, SP2, SP3],
    [LCA1, LCA2, LCA3],
    [O1, O2, O3],
    [G1, G2, G3],
    [P1, P2, P3],
    [WIP],
  ];

  function handleLeftButton() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  }

  function handleRightButton() {
    if (imageIndex < 2) {
      setImageIndex(imageIndex + 1);
    }
  }

  return (
    <>
      {props.globalIndex && (
        <Container>
          <Subcontainer className="vitrine-text">
            <Text>{textArray[props.globalIndex]}</Text>
          </Subcontainer>
          <Subcontainer className="vitrine-carousel">
            <Button
              className="carousel-left-btn"
              id="carousel-left-btn"
              onClick={handleLeftButton}
            >
              <i class="bi bi-arrow-left-circle"></i>
            </Button>
            <Button
              className="carousel-right-btn"
              id="carousel-right-btn"
              onClick={handleRightButton}
            >
              <i class="bi bi-arrow-right-circle"></i>
            </Button>
            <Carousel id="vitrine-carousel">
              {props.globalIndex && (
                <>
                  <ImageContainer>
                    <Image src={imagesArray[props.globalIndex][0]} />
                  </ImageContainer>
                  {imagesArray[props.globalIndex][1] && (
                    <ImageContainer>
                      <Image src={imagesArray[props.globalIndex][1]} />
                    </ImageContainer>
                  )}
                  {imagesArray[props.globalIndex][2] && (
                    <ImageContainer>
                      <Image src={imagesArray[props.globalIndex][2]} />
                    </ImageContainer>
                  )}
                </>
              )}
            </Carousel>
          </Subcontainer>
        </Container>
      )}
    </>
  );
}

import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const animatedOpening = keyframes`
from {
  transform: translateY(-100px);
}
to {
  transform: translateY(0);
}
`;

const animatedNavLink = keyframes`
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

const NavContainer = styled.nav`
  z-index: 100;
  animation: ${animatedOpening} 0.3s ease-in-out;
  display: ${(props) => (props.isOpened ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 50px;
  margin: auto;
`;

const MenuLink = styled(NavLink)`
  transition: all 0.3s ease-in-out;
  color: var(--color-light);
  font-size: 2rem;
  font-family: "Unibody", "Orbitron", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  color: var(--color-light);
  filter: drop-shadow(0 0 2px var(--color-dark));
  &:hover {
    animation: ${animatedNavLink} 0.7s ease-in-out infinite;
    background: linear-gradient(
      0deg,
      rgba(255, 103, 2, 1) 0%,
      rgba(232, 23, 154, 1) 90%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.menu-active {
    animation: ${animatedNavLink} 0.7s ease-in-out infinite;
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

export default function NavBar(props) {
  return (
    <NavContainer isOpened={props.isOpened}>
      <MenuLink exact to="/" activeClassName="menu-active">
        <LinkArrow>➤ </LinkArrow>
        Home
      </MenuLink>
      <MenuLink to="/galery" activeClassName="menu-active">
        <LinkArrow>➤ </LinkArrow>
        Galery
      </MenuLink>
      <MenuLink to="/contact" activeClassName="menu-active">
        <LinkArrow>➤ </LinkArrow>
        Contact
      </MenuLink>
    </NavContainer>
  );
}

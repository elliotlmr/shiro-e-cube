import { useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";
import NavBar from "./components/NavBar";
import MenuButton from "./components/MenuButton";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <AnimatedLogo isOpened={isOpened} />
      <NavBar isOpened={isOpened} />
      <MenuButton isOpened={isOpened} setIsOpened={setIsOpened} />
    </>
  );
}

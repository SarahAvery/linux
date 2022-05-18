import Taskbar from "../taskbar/Taskbar";
import Menu from "../nav/Nav";
import HomeStyled from "./styles";
import { useState } from "react";

const backgrounds = ["plants.jpeg", "plants2.png", "mountain.jpg", "bubbles.jpg"];

const Home = () => {
  const [imgName, setImgName] = useState("plants.jpeg");

  const updateImg = (name: string) => {
    console.log(`---${name}---`);
    setImgName(name);
  };

  return (
    <HomeStyled backgroundImage={imgName}>
      <Taskbar />
      <Menu backgrounds={backgrounds} currImgName={imgName} updateImg={updateImg} />
    </HomeStyled>
  );
};

export default Home;

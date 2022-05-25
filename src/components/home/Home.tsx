import Taskbar from "../taskbar/Taskbar";
import Menu from "../nav/Nav";
import HomeStyled from "./styles";
import { useState } from "react";
import Folders from "../folders/Folders";

const backgrounds = [
  "plants.jpeg",
  "plants2.png",
  "mountain.jpg",
  "bubbles.jpg",
  "paint.jpg",
  "red.jpg",
  "goldandblue.jpg",
  "mountains.jpg",
  "bridge.jpg"
];

const Home = () => {
  const [imgName, setImgName] = useState("goldandblue.jpg");

  const updateImg = (name: string) => {
    setImgName(name);
  };

  return (
    <HomeStyled backgroundImage={imgName}>
      <Taskbar />
      <Menu backgrounds={backgrounds} currImgName={imgName} updateImg={updateImg} />
      <Folders />
    </HomeStyled>
  );
};

export default Home;

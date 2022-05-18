import MenuStyled from "./styles";
import Image from "../image/Image";
import { useState } from "react";
import Settings from "../settings/Settings";

const Menu = (props: any) => {
  console.log(`Nav - ${props.currImgName}`);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSetting = () => {
    console.log("toggled");
    if (isOpen === true) setIsOpen(false);
    else setIsOpen(true);
  };

  return (
    <MenuStyled>
      {isOpen && (
        <Settings
          toggle={toggleSetting}
          backgrounds={props.backgrounds}
          updateImg={props.updateImg}
          currImgName={props.currImgName}
        />
      )}
      <ul>
        <li>
          <Image name="files.png" />
        </li>
        <li>
          <Image name="software.png" />
        </li>
        <li>
          <Image name="synaptic.png" />
        </li>
        <li>
          <a href="https://www.google.ca" target="_blank" rel="noreferrer">
            <Image name="chrome.png" />
          </a>
        </li>
        <li>
          <Image name="vscode.png" />
        </li>
        <li>
          <Image name="notes.png" />
        </li>
        <li>
          <Image name="terminal.png" />
        </li>
        <li>
          <a href="https://www.spotify.com/" target="_blank" rel="noreferrer">
            <Image name="spotify.png" />
          </a>
        </li>
        <li>
          <a href="https://slack.com/" target="_blank" rel="noreferrer">
            <Image name="slack.png" />
          </a>
        </li>
        <li className="settings" onClick={() => toggleSetting()}>
          <Image name="settings.png" />
        </li>
        <li>
          <Image name="screenshot.png" />
        </li>
        <li>
          <Image name="mongo.png" />
        </li>
        <li className="menu">
          <Image name="menu.png" />
        </li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;

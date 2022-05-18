import SettingsStyled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSearch,
  faGlobe,
  faBell,
  faEye,
  faDisplay,
  faBars,
  faTableCells,
  faChevronRight,
  faLock,
  faCloud,
  faShareNodes,
  faMusic,
  faBatteryEmpty,
  faComputerMouse,
  faKeyboard,
  faPrint,
  faPalette,
  faEarthAmericas,
  faUniversalAccess,
  faUserGroup,
  faStar,
  faClock,
  faSplotch,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { faBluetooth, faUsb } from "@fortawesome/free-brands-svg-icons";
import Image from "../image/Image";

const Settings = (props: any) => {
  const close = props.toggle;
  const update = props.updateImg;

  const clickedImg = (name: string) => {
    update(name);
  };

  return (
    <SettingsStyled>
      <div className="nav">
        <div className="title-bar">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <p>Settings</p>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <FontAwesomeIcon icon={faWifi} className="icon" /> Wi-Fi
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobe} className="icon" /> Network
            </li>
            <li>
              <FontAwesomeIcon icon={faBluetooth} className="icon" /> Bluetooth
            </li>
            <li className="default">
              {/* TODO: create background component */}
              <FontAwesomeIcon icon={faDisplay} className="icon " /> Background
            </li>
            <li>
              <FontAwesomeIcon icon={faEye} className="icon" /> Appearance
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} className="icon" /> Notifications
            </li>
            <li>
              <FontAwesomeIcon icon={faSearch} className="icon" /> Search
            </li>
          </ul>
          {/*  */}
          <ul>
            <li className="li-chev">
              <FontAwesomeIcon icon={faTableCells} className="icon" /> Applications
              <p>
                <FontAwesomeIcon icon={faChevronRight} className="icon chevron" />
              </p>
            </li>
            <li className="li-chev">
              <FontAwesomeIcon icon={faLock} className="icon" /> Privacy
              <p>
                <FontAwesomeIcon icon={faChevronRight} className="icon chevron" />
              </p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCloud} className="icon" /> Online Accounts
            </li>
            <li>
              <FontAwesomeIcon icon={faShareNodes} className="icon" /> Sharing
            </li>
          </ul>
          {/*  */}
          <ul>
            <li>
              <FontAwesomeIcon icon={faMusic} className="icon" /> Sound
            </li>
            <li>
              <FontAwesomeIcon icon={faBatteryEmpty} className="icon" /> Power
            </li>
            <li>
              <FontAwesomeIcon icon={faDisplay} className="icon" /> Screen Display
            </li>
            <li>
              <FontAwesomeIcon icon={faComputerMouse} className="icon" /> Mouse & Touchpad
            </li>
            <li>
              <FontAwesomeIcon icon={faKeyboard} className="icon" /> Keyboard Shortcuts
            </li>
            <li>
              <FontAwesomeIcon icon={faPrint} className="icon" /> Printers
            </li>
            <li>
              <FontAwesomeIcon icon={faUsb} className="icon" /> Removable Media
            </li>
            <li>
              <FontAwesomeIcon icon={faPalette} className="icon" /> Device Colour Profiles
            </li>
          </ul>
          {/*  */}
          <ul>
            <li>
              <FontAwesomeIcon icon={faEarthAmericas} className="icon" /> Language and Region
            </li>
            <li>
              <FontAwesomeIcon icon={faUniversalAccess} className="icon" /> Universal Access
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} className="icon" /> Users
            </li>
            <li>
              <FontAwesomeIcon icon={faStar} className="icon" /> Default Applications
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} className="icon" /> Date & Time
            </li>
            <li>
              <FontAwesomeIcon icon={faSplotch} className="icon" /> About
            </li>
          </ul>
        </div>
      </div>
      <div className="files">
        <div className="title-bar">
          <p>Background</p>
          <FontAwesomeIcon icon={faXmark} className="icon" onClick={close} />
        </div>
        <div className="img-container">
          <div className="currImg">
            <Image name={props.currImgName} />
          </div>
          <div className="img-cards">
            {props.backgrounds.map((img: string, index: number) => {
              return (
                <div className="card" onClick={() => clickedImg(img)}>
                  <Image name={img} key={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SettingsStyled>
  );
};

export default Settings;

import TaskbarStyled from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faVolumeLow, faBatteryHalf, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Clock from "../date/Date";

const Taskbar = () => {
  return (
    <TaskbarStyled>
      <div className="activities">Activities</div>
      <div className="date">
        <Clock />
      </div>
      <div className="stats">
        <FontAwesomeIcon icon={faWifi} className="icon" />
        <FontAwesomeIcon icon={faVolumeLow} className="icon" />
        <p className="percent">
          <FontAwesomeIcon icon={faBatteryHalf} className="battery icon" />
          <span>51%</span>
        </p>
        <FontAwesomeIcon icon={faCaretDown} className="icon" />
      </div>
    </TaskbarStyled>
  );
};

export default Taskbar;

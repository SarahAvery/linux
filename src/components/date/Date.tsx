import { useEffect, useState } from "react";
import ClockStyled from "./styles";

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const d = new Date();

const month = monthNames[d.getMonth()];
const day = weekday[d.getDay()];
const number = d.getDate();

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <ClockStyled>
      <p>
        <span>{day}</span>
        <span>{month}</span>
        <span>{number}</span>
      </p>
      <p>
        {date
          .toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
          .split(":")
          .slice(0, 2)
          .join(":")}
      </p>
    </ClockStyled>
  );
}

export default Clock;

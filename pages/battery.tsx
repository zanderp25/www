import BlankLayout from "../components/blankLayout";
import { useState, useEffect } from "react";
import styles from "../styles/battery.module.css";
import { useBattery } from "react-use";

function parseTime(time: number): string {
  if (time === Infinity) return "--";

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  
  let timeString = "";
  if (hours > 0) timeString += hours + "h ";
  if (minutes > 0) timeString += minutes + "m ";
  if (seconds > 0) timeString += seconds + "s";
  return timeString;
}

export default function BatteryPage(): JSX.Element {
  const [percentage, setPercentage] = useState(0);
  const [charging, setCharging] = useState(false);
  const [icon, setIcon] = useState("/assets/battery/40.png");
  const [supported, setSupported] = useState(false);
  const [color, setColor] = useState("#4be34b");
  const [time, setTime] = useState("--");

  const battery = useBattery();
  useEffect(() => {
    if (battery) {
      if(battery.isSupported === true && battery.fetched === true){
        setSupported(true);
        setPercentage(battery.level * 100);
        setCharging(battery.charging);
        setIcon(`/assets/battery/${Math.ceil(battery.level/.2)*20}.png`);
        setColor(battery.level > .25 ? "#4be34b" : battery.level > .1 ? "#d4d458" : "#e04040");
        setTime(parseTime(battery.charging ? battery.chargingTime : battery.dischargingTime));
      }
    }
  }, [battery]);

  if (!supported) return (
    <BlankLayout 
      title="Battery"
      description="Shows the battery percentage of your computer and more info." 
      icon={icon}
    >
      <h1>Sorry, your device or browser does not support this feature.</h1>
    </BlankLayout>
    );

  return (
    <BlankLayout 
      title={battery? `${percentage}% - Battery`: "Battery"} 
      description="Shows the battery percentage of your computer and more info." 
      icon={icon}
    >
      <div className={styles.background}></div>
      <div className={styles.backgroundOverlay} style={{
        height: percentage+"%"
      }}></div>
      <div className={styles.colorOverlay} style={{
        background: color
      }}></div>
      <div className={styles.infoBox}>
        <span className={styles.percentage}>
          {percentage}
          <span className={styles.percent}>%</span>
        </span>
        <span className={styles.charging}>{charging ? "Charging" : "Discharging"}</span>
        <span className={styles.time} style={{display: (percentage >= 100) && charging? "none": "flex"}}>
          Time to {charging ? "full" : "empty"}:
          <span className={styles.timeValue}>{time}</span>
        </span>
        <span className={styles.time} style={{display: (percentage >= 100) && charging? "flex": "none"}}>{":)"}</span>
      </div>
      <div className={styles.settings} hidden>
        <input type="checkbox" id="enableStopwatch"/>
        <label htmlFor="enableStopwatch">When the battery is full, disconnect the charger to start a stopwatch.</label>
        <input type="checkbox" id="disableScreenTimeout"/>
        <label htmlFor="disableScreenTimeout">Disable screen timeout when stopwatch is running.</label>
      </div>
      <pre hidden>{JSON.stringify(battery, null, 2)}</pre>
    </BlankLayout>
  );
}
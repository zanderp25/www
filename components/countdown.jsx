import { useState, useEffect } from "react";
import styles from "../styles/Components/countdown.module.css";

export default function Countdown({ date, light }){
    light = !!light;

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let updateCountdown = () => {
        let now = new Date().getTime();
        let distance = new Date(date).getTime() - now;

        if (distance < 0){
            distance = 0;
        }

        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);

        let height = 500;
        if (d == 0) height -= 111;
        if (d == 0 && h == 0) height -= 111;

        document.getElementById("countdownContainer").style.height = height + "px";
    }

    useEffect(() => {
        updateCountdown();
        let interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [date]);

    return (
        <div className={styles.countdown}>
            <div id="countdownContainer" className={styles.countdownContainer}
                style={{background: light ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"}}
            >
                <div id="daysContainer" className={styles.countdownItem} 
                    style={{display: days==0?"none":"flex"}}
                >
                    <div className={styles.countdownNumber}>{days}</div>
                    <div className={styles.countdownText}>Day{!(days==1)? "s": ""}</div>
                </div>
                <div id="hoursContainer" className={styles.countdownItem} 
                    style={{display: days == 0 && hours == 0?"none":"flex"}}
                >
                    <div className={styles.countdownNumber}>{hours}</div>
                    <div className={styles.countdownText}>Hour{!(hours==1)? "s": ""}</div>
                </div>
                <div id="minutesContainer" className={styles.countdownItem}
                    style={{display: days == 0 && hours == 0 && minutes == 0?"none":"flex"}}
                >
                    <div className={styles.countdownNumber}>{minutes}</div>
                    <div className={styles.countdownText}>Minute{!(minutes==1)? "s": ""}</div>
                </div>
                <div id="secondsContainer" className={styles.countdownItem}
                    style={{scale: days == 0 && hours == 0 && minutes == 0?"2":"1"}}
                >
                    <div className={styles.countdownNumber}>{seconds}</div>
                    <div className={styles.countdownText}>Second{!(seconds==1)? "s": ""}</div>
                </div>
            </div>
        </div>
    );
}
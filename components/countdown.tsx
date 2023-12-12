import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Components/countdown.module.css";
import popoverStyles from '../styles/Components/countdown.ver.module.css';

export function Countdown({ date, light }: { date: Date|string, light?: boolean }): JSX.Element {
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
                style={{
                    background: light ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.2)",
                    color: light ? "black" : "white"
                }}
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

export function VersionPopover({updates, isOpen, close}: {updates: {name: string, date: string, image: string}[], isOpen: boolean, close: () => void}): JSX.Element {
    let rupdates = [...updates];
    rupdates.reverse();

    return (
        <>
            <div 
                style={{display: isOpen ? "flex" : "none"}} className={popoverStyles.backdrop} 
                onClick={(e) => {if (e.target == e.currentTarget) close();}}
            >
                <div className={popoverStyles.popover} >
                    <div className={popoverStyles.popoverHeader}>
                        <h1>Version History</h1>
                        <span onClick={close} className={popoverStyles.popoverX}>✖</span>
                    </div>
                    <div className={popoverStyles.popoverList}>
                        {rupdates.map((update, index) => (
                            <div key={index} className={popoverStyles.popoverListItem}>
                                <PopoverImage src={update.image} />
                                <div>
                                    <h3>{update.name}</h3>
                                    <p>
                                        {
                                            new Date(update.date)
                                            .toLocaleDateString(
                                                "en-US", 
                                                {weekday: "long", year: "numeric", month: "long", day: "numeric"}
                                            )
                                        }
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export function Notice({text}){
    return (<div
            style={{
                display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",
                background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(5px)",
            }}
        >
            <div
                style={{
                    background: "rgba(0, 0, 0, 0.5)", padding: "2rem", margin: "4rem",
                    borderRadius: "1rem", textAlign: "center",
                }}
            >
                <h1 style={{color:"white"}}>{text}</h1>
            </div>
        </div>
    );
}

function PopoverImage({src}){
    let [imgsrc, setSrc] = useState(src);

    function onError(){
        setSrc("/assets/icons/genshin.png");
    }

    return (
        <Image 
            src={imgsrc} height={75} width={133} objectFit='cover'
            style={{borderRadius: "10px"}}
            placeholder='blur' blurDataURL={imgsrc}
            alt="" aria-hidden={true}
            onError={onError}
        />
    )
}
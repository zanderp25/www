import AlertBanner from "./alertBanner";
import genshinUpdates from "../pages/countdown/genshin/updates.json";
import starRailUpdates from "../pages/countdown/star-rail/updates.json";
import styles from "../styles/Components/alertBanner.module.css";

export default function CountdownBanner() {
    let events = getEvents();
    let banners = [];
    for (let i = 0; i < events.length; i++) {
        let timeUntil = getTimeUntil(events[i].date);
        if (events[i].name.includes(" (TBD)")) continue;
        if (timeUntil < 864000000 && timeUntil > 0) {
            banners.push(
                <AlertBanner 
                    title={events[i].title}
                    message={`The ${events[i].name} countdown is ending in ${Math.floor(timeUntil/86400000)} days ${Math.floor((timeUntil%86400000)/3600000)} hours. Click here to see the countdown.`}
                    type="info"
                    link={`/countdown/${events[i].type}`}
                    key={events[i].name}
                    stayAlive={10}
                />
            );
        }
    }
    return (
        <div className={styles.bannerGroup}>
            {banners}
        </div>
    );
}

function getEvents(){
    let events = [];
    let today = new Date();
    events.push({
        name: "Christmas",
        date: getChristmas(today),
        title: "Christmas",
        type: "christmas",
    });
    events.push({
        name: "New Years",
        date: new Date(today.getFullYear()+1, 0, 1),
        title: "New Years",
        type: "new-years",
    });
    for (let i = 0; i < genshinUpdates.length; i++) {
        events.push({
            name: genshinUpdates[i].name,
            date: new Date(genshinUpdates[i].date),
            title: "Genshin Impact Update",
            type: "genshin",
        });
    }
    for (let i = 0; i < starRailUpdates.length; i++) {
        events.push({
            name: starRailUpdates[i].name,
            date: new Date(starRailUpdates[i].date),
            title: "Honkai: Star Rail Update",
            type: "star-rail",
        });
    }
    return events;
}

function getTimeUntil(date){
    let today = new Date();
    let timeUntil = date.getTime() - today.getTime();
    return timeUntil;
}

function getChristmas(now){
    let year;
    if (now.getMonth() == 11){
        if (now.getDate() >= 25){
            year = now.getFullYear() + 1;
        } else {
            year = now.getFullYear();
        }
    } else {
        year = now.getFullYear();
    }
    return new Date("Dec 25 " + year);
}
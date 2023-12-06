import { useState, useEffect } from "react";
import styles from "../styles/Components/titleSection.module.css";

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export default function TitleSection({ children }){
    let score = 0;

    let summonCoin = () => {
        let container = document.getElementById("coinContainer");

        let coin = document.createElement("img");
        coin.src = "/assets/icons/mario/coin.png";
        coin.className = styles.coin;

        let sound = document.createElement("audio");
        sound.src = "/assets/sounds/coin.aac";
        sound.controls = false;
        sound.autoplay = true;
        sound.volume = 0.04; // 4 percent volume lol

        container.appendChild(coin);
        container.appendChild(sound);

        score += 100;
        if(score >= 2000) {
            let count = container.getElementsByClassName(styles.coin).length;
            document.getElementById("scoreContainer").innerHTML = `${score}<br/>${count} cps`;
        } else {
            document.getElementById("scoreContainer").innerHTML = `${score}`;
        }

        setTimeout(() => {
            container.removeChild(coin);
            container.removeChild(sound);
            if(container.children.length == 0){
                score = 0;
                document.getElementById("scoreContainer").innerHTML = "";
            }
        }, 1000);
    }

    let [YSQuestIcon, setYSQuestIcon] = useState("/assets/icons/genshin/Icon_Archon_Quest.webp");
    useEffect(() => {
            setYSQuestIcon(randomChoice([
            "/assets/icons/genshin/Icon_Archon_Quest.webp",
            "/assets/icons/genshin/Icon_Commission.svg",
            "/assets/icons/genshin/Icon_Event_Quest.webp",
            "/assets/icons/genshin/Icon_Story_Quest.webp",
            "/assets/icons/genshin/Icon_World_Quest.webp",
        ]));
    });

    let [HSRQuestIcon, setHSRQuestIcon] = useState("/assets/icons/star-rail/TrailblazeQuest.png");
    useEffect(() => {
            setHSRQuestIcon(randomChoice([
            "/assets/icons/star-rail/TrailblazeQuest.png",
            "/assets/icons/star-rail/AdventureMission.png",
        ]));
    });

    return(
        <>
            <div className={styles.background}></div>
            <div className={styles.overlay}>
                <img className={styles.bigLogo} />
                <img className={styles.smallLogo} />
                <div id="coinContainer" className={styles.coinContainer}></div>
                <span id="scoreContainer" className={styles.scoreContainer}></span>
                <img src="/assets/icons/mario/questionBlock.gif" className={styles.questionBlock} onClick={summonCoin} />
                <img src="/assets/icons/mario/coin.gif" className={styles.floatingCoin} />
                <img src={YSQuestIcon} className={styles.YSQuestIcon} />
                <img src={HSRQuestIcon} className={styles.HSRQuestIcon} />
                <img src="/assets/icons/genshin/Icon_New.webp" className={styles.newIcon} />
                <img src="/assets/icons/genshin/Icon_Paimon_Menu.webp" className={styles.paimonIcon} />
                <img src="/assets/icons/mario/mario.png" className={styles.mario} />
                <img src="/assets/icons/mario/mushroom.png" className={styles.mushroom} />
                <img src="/assets/icons/langs/c++.png" className={styles.cpp} />
                <img src="/assets/icons/langs/python.png" className={styles.python} />
                <img src="/assets/icons/langs/js.png" className={styles.js} />
                <img src="/assets/icons/zelda/triforce.png" className={styles.triforce} />
                <img src="/assets/icons/zelda/rupee.png" className={styles.rupee} />
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
}
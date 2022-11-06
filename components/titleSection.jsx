import styles from "../styles/Components/titleSection.module.css";

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function TitleSection({ children }){
    let summonCoin = () => {
        let container = document.getElementById("coinContainer");
        let coin = document.createElement("img");
        coin.src = "/assets/icons/mario/coin.png";
        coin.className = styles.coin;
        container.appendChild(coin);
        setTimeout(() => {
            container.removeChild(coin);
        }, 1000);
    }

    let questIcon = randomChoice([
        "/assets/icons/genshin/Icon_Archon_Quest.webp",
        "/assets/icons/genshin/Icon_Commission.svg",
        "/assets/icons/genshin/Icon_Event_Quest.webp",
        "/assets/icons/genshin/Icon_Story_Quest.webp",
        "/assets/icons/genshin/Icon_World_Quest.webp",
    ]);

    return(
        <>
            <div className={styles.background}></div>
            <div className={styles.overlay}>
                <img className={styles.bigLogo} />
                <img className={styles.smallLogo} />
                <div id="coinContainer" className={styles.coinContainer}></div>
                <img src="/assets/icons/mario/questionBlock.gif" className={styles.questionBlock} onClick={summonCoin} />
                <img src="/assets/icons/mario/coin.gif" className={styles.floatingCoin} />
                <img src={questIcon} className={styles.questIcon} />
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
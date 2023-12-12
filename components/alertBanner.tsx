// import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "../styles/Components/alertBanner.module.css";
import Link from "next/link";

export default function AlertBanner({ title, message, type, link, stayAlive}:
        { title: string, message: string, type: string, link?: string, stayAlive?: number }) 
    {
    let [show, setShow] = useState(true);
    let [opacity, setOpacity] = useState(1);

    function closeBanner() {
        setOpacity(0);
        setTimeout(() => {
            setShow(false);
        }, 500);
    }

    if (stayAlive) {
        setTimeout(() => {
            closeBanner();
        }, stayAlive*1000);
    }

    if (link == undefined) link = "javascript:void(0)";

    let linkStyle = {color: "inherit", textDecoration: "none"};

    return (
        show && (
        <div className={`${styles.alertBanner} ${styles[type]}`} style={{opacity: opacity, transform: `translateX(-${100*(1-opacity)}%)`}} >
            {
                link? (
                    <Link legacyBehavior href={link}><a style={linkStyle}>
                        <div className={styles.alertBannerContent}>
                            <h3>{title}</h3>
                            <p>{message}</p>
                        </div>
                    </a></Link>
                ):(
                    <div className={styles.alertBannerContent}>
                        <h3>{title}</h3>
                        <p>{message}</p>
                    </div>
                )
            }
            {/* {cookieName? (
                <button className={styles.alertBannerClose} onClick={() => closeBanner(cookieName, maxAge)}>&#10006;</button>
            ) : ( */}
                <button className={styles.alertBannerClose} onClick={closeBanner}>&#10006;</button>
            {/* )} */}
        </div>
        )
    );
}

// export default dynamic(() => Promise.resolve(AlertBanner), { ssr: false });
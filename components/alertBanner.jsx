import { useState } from "react";
import styles from "../styles/Components/alertBanner.module.css";


// export default function AlertBanner({ title, message, type, cookieName, maxAge }) {
export default function AlertBanner({ title, message, type }) {
    const [show, setShow] = useState(true);
    
    // if (cookieName) {
    //     if (document.cookie.includes(cookieName)) {
    //         setShow(false);
    //     }
    // }

    // function closeBanner(cookieName, maxAge) {
    //     if(cookieName && maxAge) {
    //         document.cookie = `${cookieName}=true; max-age=${maxAge}; path=/`;
    //     }
    //     setShow(false);
    // }

    
    return (
        show && (
        <div className={`${styles.alertBanner} ${styles[type]}`}>
            <div className={styles.alertBannerContent}>
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
            {/* <button onClick={() => closeBanner(cookieName, maxAge)}>&#10006;</button> */}
            <button onClick={() => setShow(false)}>&#10006;</button>
        </div>
        )
    );
    }
// import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "../styles/Components/alertBanner.module.css";
import Link from "next/link";

// function AlertBanner({ title, message, type, link, cookieName, maxAge}: 
export default function AlertBanner({ title, message, type, link}: 
        // { title: string, message: string, type: string, link?: string}) 
        { title: string, message: string, type: string, link?: string, cookieName?: string, maxAge?: number }) 
    {
    const [show, setShow] = useState(true);

    if (link == undefined) link = "javascript:void(0)";
    
    // if (cookieName) {
    //     if (document.cookie.includes(cookieName)) {
    //         setShow(false);
    //     }
    // }

    // function closeBanner(cookieName?:string, maxAge?: number) {
    //     if(cookieName) {
    //         document.cookie = `${cookieName}=true; ${maxAge? `max-age=${maxAge}` : ""} path=/`;
    //     }
    //     setShow(false);
    // }

    
    return (
        show && (
        <div className={`${styles.alertBanner} ${styles[type]}`}>
            <Link href={link}>
            <div className={styles.alertBannerContent}>
                <h3>{title}</h3>
                <p>{message}</p>
            </div>
            </Link>
            {/* {cookieName? (
                <button className={styles.alertBannerClose} onClick={() => closeBanner(cookieName, maxAge)}>&#10006;</button>
            ) : ( */}
                <button className={styles.alertBannerClose} onClick={() => setShow(false)}>&#10006;</button>
            {/* )} */}
        </div>
        )
    );
}

// export default dynamic(() => Promise.resolve(AlertBanner), { ssr: false });
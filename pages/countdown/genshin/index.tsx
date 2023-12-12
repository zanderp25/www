import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {Countdown, Notice, VersionPopover} from '../../../components/countdown';
import FullscreenButton from '../../../components/fullscreenButton';
import updates from './updates.json';

function App() {
    let dates = updates.filter((date) => {
        return new Date(date.date) > new Date();
    });
    let empty = false;
    if (dates.length == 0){
        empty = true;
        dates = [{name:"Select...",date:"1970-01-01T00:00:00Z",image:"",image_credits:"",image_credits_url:"",light:false}];
    }
    let [date, setDate] = useState(dates[0]);
    let body = <h1>Loading...</h1>;
    let [background, setBackground] = useState(date.image || "/assets/genshin/Fontaine.jpeg");

    let [isOpen, setIsOpen] = useState(false);
    function togglePopover() {
        setIsOpen(!isOpen);
    }
    function closePopover() {
        setIsOpen(false);
    }
    

    if (empty){
        body = <Notice text="There are no more updates in the system at this moment." />
    }
    else if (new Date(date.date) < new Date()){
        body = <Notice text="This update has already passed." />;
    } else {
        let credits;
        if (date.image_credits_url != "" && date.image_credits_url != undefined){
            credits = <Link href={date.image_credits_url}>
                <a style={{color:"white"}}>
                    {date.image_credits}
                </a>
            </Link>
        } else {
            credits = date.image_credits;
        }
        body = <>
            <Countdown date={date.date} light={date.light} />
            <span 
                style={{
                    position: "absolute",bottom: "0",right: "0",
                    zIndex: "10",color: "white",fontSize: "1rem",
                    padding: "1rem", backgroundColor: "rgba(0,0,0,0.5)", 
                    borderRadius: "1rem 0 0 0", backdropFilter: "blur(5px)",
                }}
            >📸 : {credits}</span>
        </>
    }
    
    return (
        <>
            <Head>
                <title>Genshin Impact Countdown</title>
                <meta name="description" content="Countdown to the next Genshin Impact update or banner." />
                <link rel="icon" href="/assets/icons/genshin.png" />
                <meta name="og:image" content="https://zanderp25.com/assets/icons/genshin.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Head>
            <div style={{width: "100%",height: "100%",objectFit: "cover",position: "absolute",top: "0",left: "0",zIndex: "-1"}}>
                <Image 
                    src={background} layout="fill" objectFit="cover" 
                    onError={() => {setBackground("/assets/genshin/Fontaine-aerial.webp");return true;}}
                    alt="" aria-hidden={true}
                />
            </div>
            {body}
            <select 
                name="date" value={dates.indexOf(date)} 
                onChange={(e) => {
                    setDate(dates[e.target.value]);
                    setBackground(dates[e.target.value].image);
                    return true;
                }}
                style={{position: "absolute",bottom: "0",left: "0",zIndex: "10", borderRadius: "0 1rem 0 0",
                background: "rgba(0,0,0,0.5)",color: "#fff",border: "none",padding: "10px",fontSize: "12pt",
                backdropFilter: "blur(5px)"}}>
                {dates.map((date, i) => {
                    return <option key={i} value={i}>{date.name}</option>
                })}
            </select>
            <FullscreenButton />
            <button 
                onClick={togglePopover} 
                style={{
                    position: "absolute", bottom: "3rem", left: "5px", zIndex: "10", 
                    background: "rgba(0,0,0,0.5)", color: "white", fontSize: "10pt",
                    border: "none", borderRadius: "1rem", padding: "10px",
                    backdropFilter: "blur(5px)"
                }}
            >Version History</button>
            <VersionPopover updates={updates} isOpen={isOpen} close={closePopover} />
        </>
    )
}

export default App;

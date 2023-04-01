import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Countdown from '../../../components/countdown';
import FullscreenButton from '../../../components/fullscreenButton';
import dates from './updates.json';

function App() {
    let [date, setDate] = useState(dates[0]);
    let body = <h1>Loading...</h1>;

    if (new Date(date.date) < new Date()){
        body = <h1>This update has already passed.</h1>
    } else {
        let credits;
        if (date.image_credits_url != ""){
            credits = <Link href={date.image_credits_url}>
                <a style={{color:"white"}}>
                    {date.image_credits}
                </a>
            </Link>
        } else {
            credits = date.image_credits;
        }
        body = <>
            <div style={{width: "100%",height: "100%",objectFit: "cover",position: "absolute",top: "0",left: "0",zIndex: "-1"}}>
                <Image src={date.image} layout="fill" objectFit="cover" />
            </div>
            <span 
                style={{
                    position: "absolute",bottom: "0",right: "0",
                    zIndex: "1",color: "white",fontSize: "1rem",
                    padding: "1rem", backgroundColor: "rgba(0,0,0,0.5)", 
                    borderRadius: "1rem 0 0 0", backdropFilter: "blur(5px)"}}
            >📸 : {credits}</span>
            <Countdown date={date.date} light={date.light} />
        </>
    }
    
    return (
        <>
            <Head>
                <title>Honkai: Star Rail Countdown</title>
                <meta name="description" content="Countdown to the next Honkai: Star Rail update or banner." />
                <link rel="icon" href="/assets/icons/star-rail.png" />
                <meta name="og:image" content="https://zanderp25.com/assets/icons/star-rail.png" />
            </Head>
            {body}
            <select name="date" value={dates.indexOf(date)} onChange={(e) => {setDate(dates[e.target.value]);return true;}}
                style={{position: "absolute",bottom: "0",left: "0",zIndex: "10", borderRadius: "0 1rem 0 0",
                background: "rgba(0,0,0,0.5)",color: "#fff",border: "none",padding: "10px",fontSize: "12pt",
                backdropFilter: "blur(5px)"}}>
                {dates.map((date, i) => {
                    return <option key={i} value={i}>{date.name}</option>
                })}
            </select>
            <FullscreenButton />
        </>
    );
}

export default App;

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Countdown from '../../../components/countdown';
import FullscreenButton from '../../../components/fullscreenButton';
import updates from './updates.json';

function VersionPopover({isOpen, close}) {
    let rupdates = [...updates];
    rupdates.reverse();

    return (
        <>
            <div 
                style={{
                    position: "absolute",top: "0",left: "0",zIndex: "10",
                    width: "100%", height: "100%",
                    backdropFilter: "blur(5px)",
                    display: isOpen ? "flex" : "none",
                    placeContent: "center"
                }}
                onClick={close}
            >
                <div 
                    style={{
                        background: "rgba(0,0,0,0.5)",color: "#fff",
                        padding: "2rem", margin: "4rem",
                        borderRadius: "1rem",backdropFilter: "blur(5px)",
                        display: "flex", flexDirection: "column",
                    }}
                >
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
                        <h1 style={{textAlign: "center", margin:"0 0 10px 0"}}>Version History</h1>
                        <button onClick={close} style={{float: "right",border: "none",background: "none",color: "#fff",fontSize: "1.5rem"}}>✖</button>
                    </div>
                    <div style={{overflowY: "scroll", height: "100%", display:"flex", flexDirection:"column", gap:"10px"}}>
                        {rupdates.map((update, index) => (
                            <div key={index} style={{display: "flex", alignItems: "center", marginBottom: "10px", paddingRight: "10px"}}>
                                <PopoverImage src={update.image} />
                                <div style={{display:"flex", marginLeft: "10px", flexDirection:"column"}}>
                                    <h3 style={{fontSize:"30px", margin:"0"}}>{update.name}</h3>
                                    <p style={{margin:"0"}}>
                                        {new Date(update.date).toLocaleDateString("en-US", {weekday: "long", year: "numeric", month: "long", day: "numeric"})}
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

function PopoverImage({src}){
    let [imgsrc, setSrc] = useState(src);

    function onError(){
        setSrc("/assets/icons/star-rail.png");
    }

    return (
        <Image src={imgsrc} height={75} width={133} objectFit='cover'
            style={{borderRadius: "10px"}}
            placeholder='blur' blurDataURL={imgsrc}
            onError={onError}
        />
    )
}

function Notice({text}){
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
    let [background, setBackground] = useState(date.image || "/assets/star-rail/star-rail.jpg");

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
                <title>Honkai: Star Rail Countdown</title>
                <meta name="description" content="Countdown to the next Honkai: Star Rail update or banner." />
                <link rel="icon" href="/assets/icons/star-rail.png" />
                <meta name="og:image" content="https://zanderp25.com/assets/icons/star-rail.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Head>
            <div style={{width: "100%",height: "100%",objectFit: "cover",position: "absolute",top: "0",left: "0",zIndex: "-1"}}>
                <Image 
                    src={background} layout="fill" objectFit="cover" 
                    onError={() => {setBackground("/assets/star-rail/star-rail.jpg");return true;}}
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
            <VersionPopover isOpen={isOpen} close={closePopover} />
        </>
    );
}

export default App;

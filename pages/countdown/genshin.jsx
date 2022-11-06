import Head from 'next/head';
import { useState } from 'react';

import Countdown from '../../components/countdown';

let dates = [
    {name: "3.2 Second Banner", date: "2022-11-18T00:00:00+08:00", image: "/assets/genshin/layla.png", light: true},
    {name: "3.3 Update", date: "2022-12-07T11:00:00+08:00", image: "/assets/genshin/3.3.webp", light: false},
];

function App() {
    let [date, setDate] = useState(dates[0]);
    let body = <h1>Loading...</h1>;

    if (new Date(date.date) < new Date()){
        body = <h1>This update has already passed.</h1>
    } else {
        body = <>
            <img src={date.image} 
                style={{width: "100%",height: "100%",objectFit: "cover",position: "absolute",top: "0",left: "0",zIndex: "-1"}}
            />
            <Countdown date={date.date} light={date.light} />
        </>
    }
    
    return (
        <>
            <Head>
                    <title>Genshin Impact Countdown</title>
                    <meta name="description" content="Countdown to the next Genshin Impact update." />
                    <link rel="icon" href="/assets/icons/ZP25 Circle.png" />
            </Head>
            {body}
            <select name="date" value={dates.indexOf(date)} onChange={(e) => {setDate(dates[e.target.value]);return true;}}
                style={{position: "absolute",bottom: "5px",left: "5px",zIndex: "1",
                background: "rgba(0,0,0,0.5)",color: "#fff",border: "none",padding: "5px",fontSize: "12pt"}}
            >
                {dates.map((date, i) => {
                    return <option value={i}>{date.name}</option>
                })}
            </select>
        </>
    );
}

export default App;

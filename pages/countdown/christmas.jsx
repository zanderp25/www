import { useCallback } from 'react';
import Head from 'next/head';
import Particles from "react-tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

import Countdown from '../../components/countdown';


function getChristmas(now){
    var year;
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

function App() {
    let now = new Date();
    let christmas = getChristmas(now);

    const particlesInit = useCallback(async function(main) {
        await loadSnowPreset(main);
    }, [])

    return (
        <>
            <Head>
                <title>Christmas Countdown - Zanderp25</title>
                <meta name="description" content="Countdown to the next Christmas." />
                <link rel="icon" href="/assets/icons/ZP25 Circle.png" />
            </Head>
            <Particles options={{preset:"snow",background:{color:"#500"}}} init={particlesInit} />
            <Countdown date={christmas} light />
        </>
    );
}

export default App;

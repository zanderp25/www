// import { useCallback } from 'react';
import Head from 'next/head';
// import Particles from "react-tsparticles";
// import { loadSnowPreset } from "tsparticles-preset-snow";

import { Countdown } from '../../components/countdown';
import FullscreenButton from '../../components/fullscreenButton';

const hostname = typeof window !== 'undefined' 
    ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '')
    : 'https://zanderp25.com';

function getChristmas(now){
    let year;
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

    // const particlesInit = useCallback(async function(main) {
    //     await loadSnowPreset(main);
    // }, [])

    return (
        <>
            <Head>
                <title>Christmas Countdown - Zanderp25</title>
                <meta name="description" content="Countdown to the next Christmas." />
                <link rel="icon" href="/assets/icons/christmas.png" />
                <meta name="og:image" content={hostname + "/assets/icons/christmas.png"} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Head>
            {/* <Particles options={{preset:"snow",background:{color:"#000"}}} init={particlesInit} /> */}
            <Countdown date={christmas} light />
            <FullscreenButton />
        </>
    );
}

export default App;

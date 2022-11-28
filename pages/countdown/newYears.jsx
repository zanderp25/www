import { useCallback } from 'react';
import Head from 'next/head';
import Particles from "react-tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

import Countdown from '../../components/countdown';

function getDate(now){
    return new Date("January 1 " + (now.getFullYear() + 1));
}

function App() {
    let now = new Date();
    let newyears = getDate(now);

    const particlesInit = useCallback(async function(main) {
        await loadFireworksPreset(main);
    }, [])

    return (
        <>
            <Head>
                <title>New Years Countdown - Zanderp25</title>
                <meta name="description" content="Countdown to the next year." />
                <link rel="icon" href="/assets/icons/newyears.png" />
                <meta name="og:image" content="https://zanderp25.com/assets/icons/newyears.png" />
            </Head>
            <Particles options={{preset: "fireworks"}} init={particlesInit}/>
            <Countdown date={newyears} />
        </>
    );
}

export default App;

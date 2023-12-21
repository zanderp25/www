import { useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import dynamic from "next/dynamic";
import Head from 'next/head';
import BlankLayout from '../../components/blankLayout';

export async function getServerSideProps(context) {
    return {
        props: {
            color: context.params.color || "0face0"
        }
    }
}

function Color({ color }) {
    const router = useRouter();
    
    useEffect(() => {
        if (!router.isReady || color === undefined) {
            return;
        }
    }, [router.isReady, color]);

    color = color[0];

    if (color == "0") color = "0face0";
    let [colorText, setColorText] = useState(color);
    console.log(color);
    return (
        <BlankLayout 
            title={`Color #${color}`}
            description={`HEX color code #${color}`}
            icon={`/api/color/${color}`}
        >
            <Head>
                <meta name="theme-color" content={`#${color}`} />
                <meta property="og:url" content={`https://zanderp25.com/color/${color}`} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div style={{
                backgroundImage: "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)", 
                backgroundSize: "20px 20px", backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px", 
                width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0
            }}></div>
            <div style={{backgroundColor: `#${color}`, width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0}}>
                <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100vw"}}>
                    <input type="text" value={`#${colorText}`} onChange={(e) => setColor(router, e.target.value.slice(1), setColorText)} 
                        style={{
                            width: "100%", height: "100px", fontSize: "5em", textAlign: "center", 
                            padding: 0,
                            // color: getTextColor(color as string) || "red",
                            // color: "white", mixBlendMode: "difference",
                            color: "white", filter: "drop-shadow(0 0 2px #000a)",
                            backgroundColor: "transparent", border: "none", outline: "none"
                        }}
                    />
                </div>
            </div>
        </BlankLayout>
    )
}

export default dynamic(() => Promise.resolve(Color), { ssr: false });

function setColor(router: NextRouter, color: string, setColorText: (color: string) => void){
    if (color === undefined) return true;
    if(!color.match(/^[0-9a-fA-F]{0,8}$/)) return false;

    console.log(`Setting color to "${color}"`);
    setColorText(color);

    // validate color
    if ([3, 4, 6, 8].indexOf(color.length) === -1) return true;
    console.log("Valid color");

    router.push(`/color/${color}`);
    return true;
}
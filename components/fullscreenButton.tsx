import dynamic from "next/dynamic";
import { useState } from "react";

function FullscreenButton() {
    let [fullscreen, setFullscreen] = useState(false);

    return (
        <>
            <button style={{position: "absolute",top: "0",right: "0",zIndex: "10", borderRadius: "0 0 0 1rem",
                background: "rgba(0,0,0,0.5)",color: "#fff",border: "none",padding: "10px",fontSize: "12pt",
                backdropFilter: "blur(5px)"}} onClick={() => {
                    setFullscreen(!fullscreen);
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen();
                    } else {
                        if (document.exitFullscreen) {
                            document.exitFullscreen(); 
                        }
                    }
                }}
                hidden={!document.fullscreenEnabled}
            >
                {
                    fullscreen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minimize-2"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize-2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                }
            </button>
        </>
    );
}

export default dynamic(() => Promise.resolve(FullscreenButton), { ssr: false });
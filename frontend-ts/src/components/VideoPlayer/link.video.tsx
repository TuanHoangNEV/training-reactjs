import React, {RefObject, useState} from "react";
import ReactHlsPlayer from "react-hls-player";
import "bootstrap/dist/css/bootstrap.min.css";


export default function LinkVideo() {
    //https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
    //rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4
    const [hlsUrl] = useState(
        "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    );
    const playerRef: RefObject<HTMLVideoElement> = React.createRef();

    return (
        <div className="row justify-content-center w-25 m-auto">
            <ReactHlsPlayer
                src={hlsUrl}
                autoPlay={false}
                controls={true}
                width="35%"
                height="auto"
                playerRef={playerRef}
            />
        </div>
    );
}


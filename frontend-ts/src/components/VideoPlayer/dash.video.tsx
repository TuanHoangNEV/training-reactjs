import React, {RefObject, useEffect, useState} from 'react'

import '../style/dashPlayer.css';
import axios from 'axios'
import ReactHlsPlayer from 'react-hls-player'

function DashPlayer() {

    const [fileDetected, setFileDetected] = useState(false)
    const playerRef: RefObject<any> = React.useRef();

    useEffect(() => {
        axios.get("/video").then(res => {
            if (res.status === 200) {
                setFileDetected(true)
            }
        })
    }, [])

    return (
        <div id="video-player" className="App">
             {fileDetected ?
                <ReactHlsPlayer
                    src='videos/output.m3u8'
                    autoPlay={true}
                    controls={true}
                    width={640}
                    height={480}
                    muted={true}
                    playerRef={playerRef}
                />
                : null
             }

            {/*<ReactHlsPlayer*/}
            {/*    src='http://localhost:5000/files?file=playlist.m3u8'*/}
            {/*    autoPlay={true}*/}
            {/*    controls={true}*/}
            {/*    width={640}*/}
            {/*    height={480}*/}
            {/*    muted={true}*/}
            {/*    playerRef={playerRef}*/}
            {/*/>*/}
        </div>
    );
}

export default DashPlayer;

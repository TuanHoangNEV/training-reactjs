import React, { useRef, useEffect } from "react";
import { loadPlayer } from "rtsp-relay/browser";

export default function WsPlayer(){
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvas.current) throw new Error("Ref is null");

        loadPlayer({
            url: "rtsp://rtsp.stream/pattern",
            canvas: canvas.current
        });
    }, []);

    return (
        <>
            <p>....</p>
            <canvas ref={canvas}></canvas>
        </>
    );
}

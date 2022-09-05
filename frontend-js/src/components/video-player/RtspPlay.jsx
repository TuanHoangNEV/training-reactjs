import React, {useEffect, useRef} from 'react';
import PropTypes from "prop-types";

const RtspPlay = ({id, url}) => {

    const ref = useRef();
    useEffect(() => {
        const state = {
            bufferDuration: 1,
            socket: "ws://localhost:8080/ws/",
            redirectNativeMediaErrors: true,
            errorHandler: this.errHandler.bind(this),
            infoHandler: this.infHandler.bind(this),
        };
        const player = window.Streamedian.player(ref.current, state);
        return () => {
            if (player) {
                player.destroy()
            }
        };
    }, [ref]);

    return (
        <div>
            <video id={`${id}`} controls autoPlay>
                <source src={`${url}`}/>
            </video>
        </div>
    );
};

RtspPlay.props = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default RtspPlay;

import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import JSMpeg from '@cycjimmy/jsmpeg-player';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
}));

const VideoPlayerComponent = ({name, url}) => {
    const classes = useStyles();
    const ref = useRef();
    useEffect(() => {
        const player = new JSMpeg.Player(url, {
            canvas: ref.current,
            autoplay: true,
        });
        return () => {
            if (player) {
                // player.destroy()
            }
        };
    }, [ref]);

    return (
        <div id={`${name}`}>
            <canvas ref={ref} className={classes.root}></canvas>
        </div>
    );
};

VideoPlayerComponent.props = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default VideoPlayerComponent;
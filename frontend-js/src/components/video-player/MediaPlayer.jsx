import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute, SeekBar, CurrentTime, Progress, Duration, Volume, Fullscreen } = controls

class MediaPlayer extends Component {
    render() {
        return (
            <Media>
                <div className="media">
                    <div className="media-player">
                        <Player src="video.mp4" />
                    </div>
                    <div className="media-controls">
                        <PlayPause />
                        <CurrentTime />
                        <Progress />
                        <SeekBar />
                        <Duration />
                        <MuteUnmute />
                        <Volume />
                        <Fullscreen />
                    </div>
                </div>
            </Media>
        )
    }
}

export default MediaPlayer;
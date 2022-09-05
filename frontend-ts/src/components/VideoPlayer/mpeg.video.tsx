import React from 'react'
import VideoFeed from "./component/VideoFeed";
import {Button} from "../form";
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps {
}

interface IState {
    src: string;
    type: string
}

let nextState: any;
export default class MpegVideo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        //videos/video.mp4
        //https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8
        //videos/m3045.m3u8

        //type="application/x-mpegURL"
        //type="video/mp4"
        //type="application/x-rtsp"
        this.state = {
            src: 'videos/video.mp4',
            type: 'video/mp4'
        }
    }

    private onClick = () => {
        nextState = {
            ...this.state,
            src: 'value'
        };
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <div className={'row col col-12'}>
                    <input
                        name="src"
                        value={this.state.src}
                        className={'col col-10 height-30p'}
                    />

                    <Button
                        label="Play"
                        className="btn btn-success col col-2 height-30p p-0"
                        onClick={this.onClick}
                    />
                </div>
                <div className={'row'}>
                    <VideoFeed src={this.state.src} type={this.state.type}/>
                </div>
            </div>

        );
    }
}
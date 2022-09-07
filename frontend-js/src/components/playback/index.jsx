import React from 'react';
import SearchMenu from "./SearchMenu";
import '../styles/playback.styles.css'
import PlayRecord from "./PlayRecord";

class PlayBackHome extends React.Component {

    constructor() {
        super();
        this.state = {
            videoUrl: null
        }
    }

    onUpdateVideoUrl = (fileName) => {
        this.setState({videoUrl: (fileName ? 'videos/' + fileName : null)});
    }


    render() {
        return (
            <div className={"col-8"}>
                {
                    this.state.videoUrl ?
                        <PlayRecord url={this.state.videoUrl} type={'video/mp4'}/>
                        : null
                }
                <SearchMenu onUpdateVideoUrl={this.onUpdateVideoUrl}/>
            </div>

        );
    }
}

export default PlayBackHome;
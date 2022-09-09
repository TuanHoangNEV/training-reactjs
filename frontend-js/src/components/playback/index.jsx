import React from 'react';
import SearchMenu from "./SearchMenu";
import '../styles/playback.styles.css'
import PlayRecord from "./PlayRecord";
import PlayerControls from "./PlayerControls";

class PlayBackHome extends React.Component {

    constructor() {
        super();
        this.state = {
            videoUrl: null,
            lstThumbnail: []
        }
    }

    onUpdateVideoUrl = (fileName) => {
        this.setState({videoUrl: (fileName ? 'videos/' + fileName : null)});
    }
    onUpdateLstThumbnail = (data) => {
        this.setState({lstThumbnail: data});
    }


    render() {
        return (
            <div className={"col-8"}>
                {
                    this.state.videoUrl ?
                        <PlayRecord url={this.state.videoUrl}/>
                        : null
                }
                <SearchMenu onUpdateVideoUrl={this.onUpdateVideoUrl} onUpdateLstThumbnail={this.onUpdateLstThumbnail}/>
                {
                    this.state.lstThumbnail ?
                        <PlayerControls lstImg={this.state.lstThumbnail} />
                        : null
                }
            </div>

        );
    }
}

export default PlayBackHome;
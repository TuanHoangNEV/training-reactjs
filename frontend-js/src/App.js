import VideoPlayerComponent from "./components/video-player/VideoPlayer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App row">
            <div className={"col-5"}>
                <VideoPlayerComponent name={'video-1'} url={'ws://localhost:9000'}/>
            </div>
            <div className={"col-5"}>
                <VideoPlayerComponent name={'video-2'} url={'ws://localhost:9100'}/>
            </div>
            <div className={"col-5"}>
                <VideoPlayerComponent name={'video-3'} url={'ws://localhost:9200'}/>
            </div>
            <div className={"col-5"}>
                <VideoPlayerComponent name={'video-4'} url={'ws://localhost:9300'}/>
            </div>

            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-5'} url={'ws://localhost:9400'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-6'} url={'ws://localhost:9500'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-7'} url={'ws://localhost:9600'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-8'} url={'ws://localhost:9700'}/>*/}
            {/*</div>*/}

            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-9'} url={'ws://localhost:8000'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-10'} url={'ws://localhost:8100'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-11'} url={'ws://localhost:8200'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-12'} url={'ws://localhost:8300'}/>*/}
            {/*</div>*/}

            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-13'} url={'ws://localhost:8400'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-14'} url={'ws://localhost:8500'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-15'} url={'ws://localhost:8600'}/>*/}
            {/*</div>*/}
            {/*<div className={"col-3"}>*/}
            {/*    <VideoPlayerComponent name={'video-16'} url={'ws://localhost:8700'}/>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;

import * as React from 'react';
import {Grid} from '@mui/material';
import Player from "./component/Player/Player";
import {useEffect, useState} from "react";

const FilmPlayer: React.FC = () => {

    const [videoFilePath, setVideoFilePath] = useState(null);
    useEffect(() => {
        const fileLink = process.env.PUBLIC_URL + "/videos/video.mp4";
        const blob = new Blob(['hello']);
        const id = URL.createObjectURL(blob);
        // @ts-ignore
        setVideoFilePath(id);
    }, [])


    return (
        <Grid container alignContent="center" justifyContent="center" spacing={2} height="100vh">
            <Grid item xs={5}>
                <Player
                    //videos/video.mp4
                    url={
                        'videos/captures.mp4'
                    }
                    light={
                        'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg'
                    }
                />
                {/*{videoFilePath ?*/}
                {/*    <Player*/}
                {/*        url={videoFilePath}*/}
                {/*        light={*/}
                {/*            'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg'*/}
                {/*        }*/}
                {/*    />*/}
                {/*    : null}*/}

            </Grid>
        </Grid>
    );
};

export default FilmPlayer;

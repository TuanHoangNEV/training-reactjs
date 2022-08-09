import * as React from 'react';
import { Grid } from '@mui/material';
import Player from "./component/Player/Player";

const FilmPlayer: React.FC = () => {
    return (
        <Grid container alignContent="center" justifyContent="center" spacing={2} height="100vh">
            <Grid item xs={5}>
                <Player
                    url={
                        'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
                    }
                    light={
                        'https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg'
                    }
                />
            </Grid>
        </Grid>
    );
};

export default FilmPlayer;

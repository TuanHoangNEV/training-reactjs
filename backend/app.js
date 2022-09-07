const express = require('express')
const app = express()
const fs = require('fs');
const hls = require('hls-server');
const path = require('path');

const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const directory = 'videos';

app.get('/video', (req, res) => {
    ffmpeg.setFfmpegPath(ffmpegInstaller.path);
    let headersSent = false

    // rtsp://username:password@ip_address
    // videos/video.mp4
    ffmpeg('rtsp://rtsp.stream/pattern', {timeout: 100000}).addOptions([
        '-profile:v baseline',
        '-fflags -nobuffer', // causes lower latency
        '-probesize 32', // causes lower latency
        '-s 480x360', // resolution
        '-level 3.0',
        '-start_number 0',
        '-hls_time 2', // length of each segment
        '-hls_list_size 0',
        '-f hls' // format to hls
    ]).output(path.join(directory, 'output.m3u8'))
        .on('end', () => {
            console.log('end');
        })
        .on('progress', function (progress) {

            console.log('Processing: ' + progress.percent + '% done')

            // check if the file exists
            fs.access("videos/output.m3u8", fs.constants.F_OK, function (err) {
                if (err) {
                    console.log("Processing error")
                    console.log('File not exist');
                } else {
                    // check to see if headers are sent so as to avoid headers being sent again
                    if (headersSent === false) {
                        console.log("Processing success")
                        console.log("File exists")

                        //file exists
                        console.log("==========")
                        console.log("==========m3u8 file detected==========")
                        console.log("==========")

                        headersSent = true

                        // send a response to frontend
                        res.sendStatus(200)
                    }
                }
            });
        })
        .run();
});

app.post('/post-video/:url', (req, res) => {
    console.log('===============================');
    console.log(req.params);
    console.log('===============================');
    res.send('Book is added to the database');
});


const server = app.listen(9000);

new hls(server, {
    provider: {
        exists: (req, cb) => {
            const ext = req.url.split('.').pop();

            if (ext !== 'm3u8' && ext !== 'ts') {
                return cb(null, true);
            }

            fs.access(__dirname + req.url, fs.constants.F_OK, function (err) {
                if (err) {
                    console.log("HLS error")
                    console.log('File not exist');
                    return cb(null, false);
                }

                cb(null, true);
            });
        },
        getManifestStream: (req, cb) => {
            const stream = fs.createReadStream(__dirname + req.url);

            cb(null, stream);
        },
        getSegmentStream: (req, cb) => {
            const stream = fs.createReadStream(__dirname + req.url);
            cb(null, stream);
        }
    }
});
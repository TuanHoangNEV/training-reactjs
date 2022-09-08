const express = require('express')
const app = express()

const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const path = require('path');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const VIDEO_FOLDER = 'D:\\training-reactjs\\test-git\\Traning-Reacjs\\frontend-js\\public\\videos\\';
const IMG_FOLDER = 'D:\\training-reactjs\\media\\thumbnail\\';
const THUMBNAIL_GOLDER = __dirname + '/images/'

app.use(express.json());
app.use(express.static(THUMBNAIL_GOLDER));


app.post('/search', (req, res) => {
    let result = []
    console.log(req.body)
    let lstCam = req.body.comboBoxSelected;
    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    for (const cam of lstCam){
        const camName = cam.label;
        const camValue = cam.value;
        fs.readdirSync(VIDEO_FOLDER).forEach((file) => {
            if (fs.lstatSync(VIDEO_FOLDER + file).isFile()) {
                result.push({ camName: camName, fileName: file, path: VIDEO_FOLDER})
            }
        });
    }
    res.send(result);
});

app.post('/get-video', (req, res) => {
    let result = []
    for (let i = 1; i < 8; i++){
        ffmpeg({ source: VIDEO_FOLDER + req.body.fileName, nolog: true })
            .on('filenames', function(filenames) {
                console.log('File name ' + filenames);
                result.push(filenames);
            })
            .on('end', function() {
            })
            .screenshots({
                filename: '2-images-%s.jpg',
                timestamps: [5142 * i],
            }, 'images');
    }
    console.log('rs ' + result);
    res.send(result);
});

app.get('/get-all-cb-data', (req, res) => {
    let result = []
    for (let step = 1; step < 10; step++) {
        result.push({label: 'Camera-' + zeroPad(step, 2), value: 'cam-' + step})
    }
    res.send(result);
});

const zeroPad = (num, places) => String(num).padStart(places, '0');

app.listen(9000);
const express = require('express')
const app = express()
const VIDEO_FOLDER = 'D:\\training-reactjs\\test-git\\Traning-Reacjs\\frontend-js\\public\\videos\\';
const IMG_FOLDER = 'D:\\training-reactjs\\test-git\\Traning-Reacjs\\frontend-js\\public\\images\\';
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

app.use(express.json());

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
    console.log(req.body)
    ffmpeg({ source: VIDEO_FOLDER + req.body.fileName, nolog: true })
        .on('filenames', function(filenames) {
            console.log('Will generate ' + filenames.join(', '))
        })
        .on('end', function() {
            console.log('Screenshots taken');
        })
        .screenshots({
            filename: 'thumbnail.jpg',
            count: 7,
            folder: IMG_FOLDER
        });
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
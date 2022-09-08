const VIDEO_FOLDER = 'D:\\training-reactjs\\test-git\\Traning-Reacjs\\frontend-js\\public\\videos\\';
const ffmpeg = require('ffmpeg-static')
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
let videoStitch = require('video-stitch');
let merger = videoStitch.merge;
let path = require('path');
merger({
    ffmpeg_path: ffmpeg
})
    .original({
        duration: 8000,
        startTime: 0,
        fileName: path.join(__dirname, 'videos', 'video.mp4'),
    })
    .clips([
        {
            startTime: 0,
            duration: 50000,
            fileName: path.join(__dirname, 'videos', 'captures.mp4'),
        },
        {
            startTime: 20000,
            duration: 500000,
            fileName: path.join(__dirname, 'videos', '10-hour-timer.mp4'),
        }
    ])
    .merge()
    .then((finalOutput) => {
        console.log('finalOutput: ', finalOutput);
    })
    .catch(err => {
        console.log('err: ', err);
    });
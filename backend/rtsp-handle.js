Stream = require('node-rtsp-stream')
stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:L29091C3@ducha.hopto.org:554/cam/realmonitor?channel=1&subtype=1',
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
})

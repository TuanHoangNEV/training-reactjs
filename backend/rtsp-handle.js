const Stream = require('node-rtsp-stream-jsmpeg')

const options = {
    name: 'streamName',
    url: 'rtsp://localhost:554/live',
    wsPort: 9200
}

stream = new Stream(options)
stream.start()

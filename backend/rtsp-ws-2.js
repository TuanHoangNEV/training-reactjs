const express = require('express');
const app = express();

const {proxy, scriptUrl} = require('rtsp-relay')(app);

// const handler = proxy({
//     url: `rtsp://rtsp.stream/pattern`,
//     verbose: false,
// });
//
// app.ws('/api/stream', handler);

app.ws('/api/stream/:cameraIP', (ws, req) => {
        console.log("=========")
        proxy({
            url: `rtsp://rtsp.stream/pattern`,
        })(ws)
    },
);

app.get('/', (req, res) =>
    res.send(`
  <canvas id='canvas'></canvas>
  <canvas id='canvas-2'></canvas>
  <script src='${scriptUrl}'></script>
  <script>
  loadPlayer({ url: 'ws://' + location.host + '/api/stream/2', canvas: document.getElementById('canvas-2') })
    // const [c1, c2] = document.querySelectorAll('canvas');
    // async function main() {
    //   await loadPlayer({ url: 'ws://' + location.host + '/api/stream/2', canvas: document.getElementById('canvas-2') });
    //   await loadPlayer({ url: 'ws://' + location.host + '/api/stream/1', canvas: document.getElementById('canvas') });
    // }
    // main();
  </script>
`),
);

app.listen(2000);
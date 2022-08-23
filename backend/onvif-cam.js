var
    http = require('http'),
    Cam = require('onvif').Cam;

new Cam({
    hostname: 'http://140.238.48.4:30379/onvif/device_service',
    username: 'root',
    password: 'Sccs555Go'
}, function (err) {
    this.absoluteMove({x: 1, y: 1, zoom: 1});
    this.getStreamUri({protocol: 'RTSP'}, function (err, stream) {
        http.createServer(function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<html><body>' +
                '<embed type="application/x-vlc-plugin" target="' + stream.uri + '"></embed>' +
                '</body></html>');
        }).listen(3030);
    });
});
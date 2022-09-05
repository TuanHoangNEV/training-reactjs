const express = require('express')
const app = express()
const TEST_FOLDER = 'D:\\training-reactjs\\test-git\\Traning-Reacjs\\frontend-js\\public\\videos';
const fs = require('fs');

app.use(express.json());

app.post('/search', (req, res) => {
    let result = []
    console.log(req.body)
    fs.readdirSync(TEST_FOLDER).forEach((file) => {
        if (fs.lstatSync(TEST_FOLDER + '\\' + file).isFile()) {
            result.push({url: file})
        }
    });
    res.send(result);
});

app.post('/get-video', (req, res) => {
    let result = []
    console.log(req.body)
    let lstData = req.body.listData;
    let index = req.body.selectedIndex;
    let fileName = lstData[index];
    console.log(fileName.url)
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
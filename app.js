const express = require('express');
const app = express();

app.use('/res', express.static(__dirname + '/resource/res'))

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('Express server started.');
});
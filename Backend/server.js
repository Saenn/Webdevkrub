const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
const port = process.env.PORT || 8081;
const promise = require('bluebird');

const option = {
    promiseLib: promise
};
const pgPromise = require('pg-promise')(option);

global.db = pgPromise(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', ['*']);
    res.append('Access-Control-Allow-Headers', ['*']);
    next();
});

const adminRoute = require('./api/routes/adminRoute')
const indexRoute = require('./api/routes/indexRoute')

adminRoute(app);
indexRoute(app);

app.listen(port, () => console.log(`Listening on port ${port}`));

// var serverBackEnd = app.listen(port);
// global.ioBackEnd = listen(serverBackEnd);

// global.ioBackEnd.on('connection', socket => {
//     console.log('connect')
//     socket.on('disconnect',() => {
//         console.log('disconnect')
//     })
// })
const express = require('express');
const path = require('path');

const htmlRouter = require('./app/routing/htmlRoutes');
const apiRouter = require('./app/routing/apiRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('/app/public'));

app.use('/', htmlRouter);
app.use('/api', apiRouter);

const server = app.listen(PORT, function() {
    console.log('Server started on Port: ' + server.address().port);
});
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT = 3000;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(compression());

app.use('/api', require('./api'));

app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'An internal server error: what a catastrophe!');
})

app.listen(PORT, () => {
    console.log(`NodeSQL listening on Port ${PORT}`)
})
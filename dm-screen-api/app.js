
const express = require('express');

const indexRouter = require('./routes/index');

const app = express();
const port = 3000

app.use('/', indexRouter);


module.exports = app;

app.listen(port, ()=>{console.log(`app listening on port ${port}`)});
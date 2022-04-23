//var 
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

const routes = require('./routes/routes.js')(app, fs);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port, () => { console.log(`App is listening on port ${port}`) });


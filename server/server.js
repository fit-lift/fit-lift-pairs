const express = require('express')

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const visitors = require('./visitors');
const users = require('./users')
const port = 5000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.use('/visitors', visitors);
app.use('/users', users);


app.listen(port,()=>{console.log(`Connected to ${port}`)})

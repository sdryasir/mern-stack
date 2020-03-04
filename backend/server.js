const express = require('express');
const mongoose = require('mongoose');

var cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb://nodedb:${encodeURIComponent('PakistanZinda@123')}@ds159624.mlab.com:59624/nodejs`, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'));
require('./routes')(app);




app.listen(4000, function () {
    console.log('server running on port: 4000');
});
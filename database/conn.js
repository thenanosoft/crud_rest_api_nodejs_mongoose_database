const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/restAPIdb', {useNewUrlParser: true, useUnifiedTopology: true});
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
    console.log('connection successfull');
})

module.exports = conn;
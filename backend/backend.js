const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build/static')));




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const strConnection = 'mongodb+srv://admin:admin123@cluster0.hrgmz.mongodb.net/MyFilms?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

const Schema = mongoose.Schema;
const cartSchema = new Schema({
    Title:String,
    Year:String,
    Poster:String
})

const cartModel = mongoose.model('film', cartSchema);

// DEPENDENCIES

// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 4000
// pull DATABASE_URL from .env
const { DATABASE_URL, PORT=4000 } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import method-override
const methodOverride = require('method-override');
// import songsRouter
const songsController = require('./controllers/songs.js')

const db = mongoose.connection

const cors = require('cors')
const morgan = require('morgan');

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
app.use(cors())
app.use(morgan('dev'))


// use Router
app.use('/songs', songsController)


// ROUTES
// create a test route
app.get("/", (req, res) => {
  res.send("hello world");
});

// search a song by title
app.get('/search', async (req,res) =>{
  try{
    res.send(await Song.find({title: {$regex: req.query.title, $options: 'i'}}))
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
})

// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Connection Events
db.on("open", () => console.log("Your are connected to mongoose"))
db.on("close", () => console.log("Your are disconnected from mongoose"))
db.on("error", (error) => console.log(error));



// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


// DEPENDENCIES

// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 3000
// pull DATABASE_URL from .env
const { DATABASE_URL, PORT = 3000 } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");

const songsSeed = require('./seedSongs/songs')

const cors = require('cors')
const morgan = require('morgan');
const Song = require("./models/songs");

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())




// ROUTES

// create a test route
// app.get("/", (req, res) => {
//   res.send("hello world");
// });





// SONG INDEX ROUTE
 
app.get('/songs', async (req, res)=> {
  try{
    res.json(await Song.find({}) )
  } catch(error){
    res.status(400).json(error)
  }
})

app.get('/songs/seed', (req, res)=>{
      Song.create(songsSeed, (err, data)=>{
          if(err){
              console.log('COULD NOT GET SEED')
          } else{
              console.log('DATABASE SEEDED SUCCESSFULLY')
              res.redirect('/songs')
          }
      })
  })


  // GET - SONG SHOW

app.get('/songs/:id', async (req,res)=>{
  try{
    res.json(await Song.findById(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})

// POST - SONG CREATE ROUTE

  app.post('/songs', async (req, res)=>{
    try {
      res.json(await Song.create(req.body))
    } catch (error) {
      res.status(400).json(error)
    }
  })


// PUT - SONG UPDATE ROUTE

app.put('/songs/:id', async (req, res)=> {
  try {
    res.json(
      await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
    )
  } catch (error) {
    res.status(400).json(error)
  }
})

// DELETE - SONG DESTROY ROUTE

app.delete('/songs/:id', async (req, res)=> {
  try {
    res.json(await Song.findByIdAndRemove(req.params.id))
  } catch (error) {
    res.status(400).json(error)
  }
})





// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));



// LISTENER

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));



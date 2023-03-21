const express = require('express')
const artists = express.Router()
const Artist = require('../models/artists');
const artistSeed = require('../seedData/artist')

// SEED ARTISTS
// artists.get('/seed', async (req,res) => {
//     try {
//         res.json(await Artist.insertMany(artistSeed))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

//// DROP ARTIST DATA
//Artist.collection.drop()


// GET - INDEX ROUTE
artists.get('/', async (req, res)=> {
    try{
        res.json(await Artist.find({}) )
    } catch(error){
        res.status(400).json(error)
    }
})

// GET - SHOW ROUTE
artists.get('/:id', async (req,res)=>{
    try{
        res.json(await Artist.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = artists
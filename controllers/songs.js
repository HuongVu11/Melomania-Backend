const express = require('express')
const router = express.Router()
const Song = require("../models/songs");
const songsSeed = require('../seedSongs/songs')
  
// SEED SONG
// router.get('/seed', async (req, res)=>{
//     try {
//         res.json(await Song.create(songsSeed))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

//// DROP DATA
// Song.collection.drop()


// SONG INDEX ROUTE
router.get('/', async (req, res)=> {
    try{
        res.json(await Song.find({}) )
    } catch(error){
        res.status(400).json(error)
    }
})

// GET - SONG SHOW
router.get('/:id', async (req,res)=>{
    try{
        res.json(await Song.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// POST - SONG CREATE ROUTE
router.post('/', async (req, res)=>{
    try {
        res.json(await Song.create(req.body))
        } catch (error) {
        res.status(400).json(error)
    }
})


// PUT - SONG UPDATE ROUTE
router.put('/:id', async (req, res)=> {
    try {
        res.json(
        await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error) {
        res.status(400).json(error)
    }
})

// DELETE - SONG DESTROY ROUTE
router.delete('/:id', async (req, res)=> {
    try {
        res.json(await Song.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
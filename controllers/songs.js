const express = require('express')
const router = express.Router()
const Song = require("../models/songs");
const songsSeed = require('../seedData/songs')
const {upload, cloudinary} = require('../utils/multer-cloudinary')
  
//// SEED SONG
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
router.post('/', upload.single('link'), async (req, res) => {
    try {
        req.body.link = req.file.path
        //console.log(req.body)
        res.json(await Song.create(req.body))
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})


// PUT - SONG UPDATE ROUTE
router.put('/:id', upload.single('link'), async (req, res)=> {
    try {
        if (typeof req.file === 'undefined') {
            res.json(await Song.findByIdAndUpdate(req.params.id, {
                $set: {
                    title: req.body.title,
                    artist: req.body.artirt,
                    album: req.body.album,
                    image: req.body.image
                }
            },
                {new: true}
            ))
        } else {
            req.body.link = req.file.path
            res.json(
                await Song.findByIdAndUpdate(req.params.id, req.body, {new: true})
            )
        }
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
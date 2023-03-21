const mongoose = require('mongoose')
const Song = require('./songs.js')

const artistSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    image: String,
    nb_album: Number,
    nb_fan: Number,
    songs: [Song.schema]
})
const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist
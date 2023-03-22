const bcrypt = require('bcrypt')
const express = require('express')
const user = express.Router()
const User = require('../models/users.js')

user.get('/', (req, res) => {
  res.json('Hello World')
})

user.post('/createaccount', async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    res.json(await User.create(req.body))
    
  } catch (error) {
    console.log(error);
    res.json(error.message)
  }
})


user.put('/login', (req, res) => {
  console.log(req.body);
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err) {
      res.json('Oops, there was an error. Please try again')
    } else {
      res.json('Username and password do not match. Please try again.')
    }
  }).catch((error) => {
    console.log(error, 'error')
    res.json('Oops, there was an error. Please try again')
  })
}) 

module.exports = user
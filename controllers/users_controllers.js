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

user.put('/login', async (req, res) => {
  console.log(req.body, 'req.body');
  User.findOne({username: req.body.username})
  .then((foundUser) => {
    if (bcrypt.compareSync(req.body.password, foundUser.password)) {
      res.json({username: foundUser.username})
    } else {
      res.json('Username and password do not match. Please try again.')
    }
  }).catch((error) => {
    console.log(error, 'error')
    res.json('Oops, there was an error. Please try again')
  })
}) 

module.exports = user
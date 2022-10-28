const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')

const server = express()

server.set('view engine', 'ejs')
server.set('views', './app/views')

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

const PORT = 3005
// Sorry using port 3005 not 3000 because I have react native running on 3000 and I don't want to kill that port because it has been troublesome getting android to run smoothly.

let weight = 0
let height = 0

server.get("/calculator", (req, res) => {
  // res.send('HOME PAGE')
  res.render('bmi')
})

server.get("/calculator", (req, res) => {
  res.render("calculator")
})

server.post("/calculator", (req, res) => {
  let bmi = req.body
  console.log(req.body, 'req')
  console.log(bmi, 'bmi')

  res.json(req.body)
})


server.listen(PORT, ()=> console.log('Server running on port', PORT))
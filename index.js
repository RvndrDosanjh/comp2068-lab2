var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

app.get('/lab3', (req, res) => {
  let method = req.query.method
  let x = parseFloat(req.query.x)
  let y = parseFloat(req.query.y)
  console.log(method, x , y)
  if(isNaN(x)) return res.status(401).send('x is invalid')
  if(isNaN(y)) return res.status(401).send('y is invalid')

  let z = 0

  if(method == 'add') z = x + y
  else if(method == 'subtract') z = x - y
  else if(method == 'multiply') z = x * y
  else if(method == 'divide') z = x / y  
  else return res.status(401).send('Method not correct')

  return res.status(200).send(z.toString())
})

app.listen(3000, 'localhost', () => {
  console.log('server is running on http://localhost:3000')
})
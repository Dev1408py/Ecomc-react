const express = require('express')
const app = express()
const port = 5000
const connectTOMongo = require("./db")
const User = require("./models/User")

const cors = require('cors');
app.use(cors())
app.use(express.json())
connectTOMongo() // call to the database for a connection.

app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.get('/', async(req, res) => {
  // res.send('Hello ')
  try{

    const user = await User.create({
      name: "fjfjffjf",
      email: "djd",
      password: "secPass"
    });
    res.json(user)
  }
  catch(err){
    console.log
    res.json(err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
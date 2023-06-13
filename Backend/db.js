const mongoose = require('mongoose')
require('dotenv').config({ path: './.env' })


const connectTOMongo = ()=>{
  mongoose.connect(`mongodb+srv://devp:${process.env.MONGO_CONNECT_PASS}@cluster0.3nvmxuj.mongodb.net/Ecomc`).then(()=>{
    console.log("Connected to mongoDB successfully.")
  })
  .catch((err)=>{
    console.log(err)
  })

}


module.exports = connectTOMongo;


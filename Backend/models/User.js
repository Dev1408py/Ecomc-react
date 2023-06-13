const mongoose = require("mongoose");
const { Schema } = mongoose;


const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  bids: 
      {
        type: Array,
      },
    
    wishlist: 
      {
        type: Array,
      },
});


module.exports = mongoose.model("users", userSchema);
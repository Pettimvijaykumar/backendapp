const mongoose = require("mongoose")

const facultyschema = new mongoose.Schema({
   
    fullname: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true,
      unique: true
    },
   
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  
    contact: {
        type: String,
        required: true,
        unique:true
      },
  });

const faculty= mongoose.model('faculty',facultyschema);

module.exports = faculty;
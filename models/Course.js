const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
    sno:{
       type:String,
       required:true,
    },
    coursetitle: {
      type: String,
      required: true
    },
    coursecode: {
        type: String,
        required: true
      },
    modes: {
      type: String,
      required:true,
      enum: ['Regular', 'Advanced']
    },
  });
  
  const course= mongoose.model('course',courseschema);


  module.exports = course;
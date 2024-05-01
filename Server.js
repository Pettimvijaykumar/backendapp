const express = require("express")
const mongoogse = require("mongoose")
const cors = require("cors")
const mongoose = require ("mongoose")




// // MongoDB compass Connection

// const dburl = "mongodb://localhost:27017/REGISTRATION PROJECT"
// //const dburl = process.env.mongodburl
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to DB Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });


// MongoDb Atlas Connection
const dburl = "mongodb+srv://admin:admin@cluster0.k5qndjs.mongodb.net/Student Registration Project?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dburl).then(() => {
    console.log("Connected to MongoDb Atlas Successfully")
}).catch((err) => {
    console.log(err.message)
});



// const dburl = "mongodb://localhost:27017/sdpproject25"
// mongoose.connect(dburl).then(() => {
//       console.log("Connected to DB Successfully")
// }).catch((err) => {
//       console.log(err.message)
// });

const app= express()
app.use(express.json()) // to parse JSON data
app.use(cors())

const adminrouter = require("./routes/adminroutes")
const studentrouter = require("./routes/studentroutes")
const facultyrouter = require("./routes/facultyroutes")

app.use("",adminrouter)
app.use("",studentrouter)
app.use("",facultyrouter)
const port="2014"
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
const express = require("express")
const mongoogse = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/sdpproject25"
mongoogse.connect(dburl).then(() => {
      console.log("Connected to DB Successfully")
}).catch((err) => {
      console.log(err.message)
});
require("mongoose")
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
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
 
const app = express()
const PORT = process.env.PORT || 3001
 
app.use(cors())
app.use(express.json())
 
mongoose.connect(process.env.MONGODB_URI)
    .then(function() {
        console.log("MongoDB connected")
    })
    .catch(function(error) {
        console.log("MongoDB connection error:", error.message)
    })
 
app.get("/", function(req, res) {
    res.send("Brief.io API is running")
})
 
app.listen(PORT, function() {
    console.log(`Server running on port ${PORT}`)
})
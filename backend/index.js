import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import briefsRouter from "./routes/briefs.js"
import activitiesRouter from "./routes/activities.js"
import teamMembersRouter from "./routes/teamMembers.js"
import authRouter from "./routes/auth.js"
import contactsRouter from "./routes/contacts.js"
 
const app = express()
const PORT = process.env.PORT || 3001

const allowedOrigins = [
  "http://localhost:5173",
  "https://briefio-sass-brief-builder-full-sta.vercel.app"
]

app.use(cors({
  origin: allowedOrigins
}))
// app.use(cors())
app.use(express.json())
 
mongoose.connect(process.env.MONGODB_URI)

    .then(function() {

        console.log("MongoDB connected")

    })

    .catch(function(error) {

        console.log("MongoDB connection error:", error.message)

    })

app.use("/api/briefs", briefsRouter)
app.use("/api/activities", activitiesRouter)
app.use("/api/teamMembers", teamMembersRouter) 
app.use("/api/auth", authRouter)
app.use("/api/contacts", contactsRouter)   
 
app.get("/", function(req, res) {

    res.send("Brief.io API is running")

})
 
app.listen(PORT, function() {

    console.log(`Server running on port ${PORT}`)

})
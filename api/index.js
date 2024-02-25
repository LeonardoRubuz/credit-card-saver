const express = require("express")
const app = express()

// Settings

// Routes 
app.get("/cards",(req, res) => {
    res.send("All cards")
})
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const PORT = 3000

mongoose.connect("mongodb://localhost:27017/todo-list").then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.log("MongoDB connection error:", error);
})

const todoRoutes = require("./routes/todo")
app.use("/todos", todoRoutes)

app.get("/", (req, res) => {
    res.redirect("/todos")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
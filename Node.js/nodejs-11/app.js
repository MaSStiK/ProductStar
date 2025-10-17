const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const path = require("path")

const app = express()
const PORT = 3000

mongoose.connect("mongodb://localhost:27017/todo-list").then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.log("MongoDB connection error:", error);
})

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/ejs", (req, res) => {
    res.render("index", { title: "Hello, EJS!", user: { name: "John Doe" } })
})

const todoRoutes = require("./routes/todo")
app.use("/todos", todoRoutes)

app.get("/", (req, res) => {
    res.redirect("/todos")
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
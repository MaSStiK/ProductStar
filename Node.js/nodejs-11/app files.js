const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
const multer = require("multer")
const iconv = require("iconv-lite")

const app = express()
const PORT = 3000

// Middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// Setup view engine
app.set("view engine", "ejs")

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/user-files").then(() => {
    console.log("Connected to MongoDB");
}).catch(error => {
    console.log("MongoDB connection error:", error);
})

const fileSchema = new mongoose.Schema({
    filename: String,
    path: String,
    originalname: String
})

const File = mongoose.model("File", fileSchema)

// Setup Multer for file uploads
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

// Получить список файлов
app.get("/", async (req, res) => {
    const files = await File.find()
    res.render("index", { files })
})

// Загрузить файл
app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        const originalname = iconv.decode(Buffer.from(req.file.originalname, "binary"), "utf-8")

        const file = new File({
            filename: req.filename,
            path: req.file.path,
            originalname: originalname
        })

        await file.save()
        res.send("File uploaded successfully")
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving file")
    }
})

// Скачать файл
app.get("/download/:id", async (req, res) => {
    try {
        const file = await File.findById(req.params.id)
        if (!file) {
            res.status(404).send("File not found")
        }
        res.download(file.path, file.originalname)
    } catch (error) {
        console.error(error);
        res.status(500).send("Error downloading file")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
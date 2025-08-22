const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Welcome");
    res.send("Welcome");
});

app.get("/hello", (req, res) => {
    console.log("Hello");
    res.send("Hello");
});

app.get("/bye", (req, res) => {
    console.log("Nice to see you");
    res.send("Nice to see you");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
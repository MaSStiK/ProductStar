const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log("Hey, Nice to see you");
    res.send("Hey, Nice to see you");
});

app.get("/error", (req, res) => {
    console.log("Sorry, but no answer");
    res.send("Sorry, but no answer");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
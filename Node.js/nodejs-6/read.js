import fs from "node:fs"

fs.readFile("./text.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data.toString());
})
import fs from "node:fs"

fs.writeFile("./my_first_write.txt", "Matvey Ovchinnikov Yakovlevich", (err) => {
    if (err) {
        console.log();
        return;
    }
})
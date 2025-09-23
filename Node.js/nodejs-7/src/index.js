import "dotenv/config";
import cors from "cors";
import express, { json, urlencoded } from "express";
import config from "./config.js";
import { openDBConnection, closeDBConnection } from './services/sqlite.js';
import router from './router.js';

const app = express();

// Регистрация middleware
app.use(
    cors({
        origin: config.allowedOrigin,
    })
);
app.use(json());
app.use(urlencoded({ extended: true }));

// https://www.google.com/search?q=express&newwindow=1&sca_esv=f56d819449a0abf0&sca_upv=1&sxsrf=ADLYWIKTEVxlCJjuDMRn-t2pqLDNkyj9Aw%3A1722669576992&source=hp&ei=CNqtZvvoOLX8wPAPjNrm4Qk&iflsig=AL9hbdgAAAAAZq3oGJEJA_8AMUfv-ndjyFLs7ONnGTks&ved=0ahUKEwj7jMuhpNiHAxU1PhAIHQytOZwQ4dUDCBY&uact=5&oq=express&gs_lp=Egdnd3Mtd2l6IgdleHByZXNzMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMggQABiABBixAzILEAAYgAQYsQMYgwEyBRAAGIAEMgUQABiABDIOEAAYgAQYsQMYgwEYigUyBRAAGIAEMgUQABiABEiolgFQxwZYs5UBcAR4AJABAJgBpgGgAYEQqgEEOC4xMLgBA8gBAPgBAZgCFqACshCoAgrCAgcQIxgnGOoCwgIKECMYgAQYJxiKBcICDBAjGIAEGBMYJxiKBcICDhAuGIAEGLEDGNEDGMcBwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQLhiABBixA8ICDhAuGIAEGLEDGMcBGK8BwgIEEAAYA5gDBZIHBTExLjExoAeA9AE&sclient=gws-wiz
// /sadasd732jasd
// localhost:3002/s/sadasd732jasd > https://www.google.com/search?q=express&newwindow=1...

app.use(router);

openDBConnection(config.dbPath).then(() => { 
    app.listen(config.port, () => {
        console.log("🚀 Server ready to handle requests");
    });
}).catch((err) => {
    console.error("Ошибка подключения к базе данных:", err);
});

process.on("SIGINT", () => {
    closeDBConnection();
});

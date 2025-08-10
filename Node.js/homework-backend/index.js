import express from "express";
import cors from "cors";
import {createColormagicController} from "./controllers/ColormagicController.js";
import {createJikanController} from "./controllers/JikanController.js"
import {createMessagesController} from "./controllers/MessagesController.js"
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";


const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

createColormagicController(app);
createJikanController(app);
createMessagesController(app);

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Nodejs API",
            description: "Nodejs API Information",
            contact: {
                name: "MaSStiK"
            },
            servers: [`http://localhost:${port}`]
        }
    },
    apis: ["./controllers/*.js"]
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => console.log(`Server is running on port ${port}`));
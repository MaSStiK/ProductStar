import { getMessages, saveMessage, editMessage, deleteMessage } from "../services/MessagesService.js";

export function createMessagesController(app) {
    /**
     * @swagger
     * definitions:
     *   Message:
     *     type: object
     *     properties:
     *       text:
     *         type: string
     *         example: "Привет мир!"
     *       date:
     *         type: integer
     *         format: int64
     *         description: Таймштамп (мс)
     *         example: 1723291200000
     */

    /**
     * @swagger
     * /api/messages:
     *   get:
     *     summary: Получите все сообщения
     *     responses:
     *       200:
     *         description: Список сообщений
     *         schema:
     *           type: array
     *           items:
     *             $ref: "#/definitions/Message"
     */
    app.get("/api/messages", (req, res) => {
        try {
            res.json(getMessages());
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });

    /**
     * @swagger
     * /api/messages:
     *   post:
     *     summary: Добавить новое сообщение
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         description: Данные нового сообщения
     *         required: true
     *         schema:
     *           type: object
     *           required: [text]
     *           properties:
     *             text:
     *               type: string
     *               description: Текст нового сообщения
     *               example: "Привет мир!"
     *     responses:
     *       201:
     *         description: Обновленный список сообщений
     *         schema:
     *           type: array
     *           items:
     *             $ref: "#/definitions/Message"
     */
    app.post("/api/messages", (req, res) => {
        try {
            const { text } = req.body
            res.json(saveMessage(text));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });

    /**
     * @swagger
     * /api/messages:
     *   put:
     *     summary: Обновить существующее сообщение
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         description: Данные для обновления сообщения
     *         required: true
     *         schema:
     *           type: object
     *           required: [text, date]
     *           properties:
     *             text:
     *               type: string
     *               description: Новый текст сообщения
     *               example: "Обновлённое сообщение"
     *             date:
     *               type: string
     *               description: Таймштамп (мс) в строке сообщения, которое нужно обновить
     *               example: "1723291200000"
     *     responses:
     *       200:
     *         description: Обновленный список сообщений
     *         schema:
     *           type: array
     *           items:
     *             $ref: "#/definitions/Message"
     */
    app.put("/api/messages", (req, res) => {
        try {
            const { text, date } = req.body
            res.json(editMessage(text, date));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });

    /**
     * @swagger
     * /api/messages:
     *   delete:
     *     summary: Удалить сообщение по timestamp
     *     consumes:
     *       - application/json
     *     parameters:
     *       - in: body
     *         name: body
     *         description: Идентификатор сообщения по таймштампу
     *         required: true
     *         schema:
     *           type: object
     *           required: [date]
     *           properties:
     *             date:
     *               type: string
     *               description: Таймштамп (мс) в строке сообщения, которое нужно удалить
     *               example: "1723291200000"
     *     responses:
     *       200:
     *         description: Обновленный список сообщений
     *         schema:
     *           type: array
     *           items:
     *             $ref: "#/definitions/Message"
     */
    app.delete("/api/messages", (req, res) => {
        try {
            const { date } = req.body
            res.json(deleteMessage(date));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });
}
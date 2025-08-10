import { getMessages, saveMessage, editMessage, deleteMessage } from "../services/MessagesService.js";

export function createMessagesController(app) {
    /**
     * @swagger
     * /api/messages:
     *   get:
     *     summary: Get all messages
     *     responses:
     *       200:
     *         description: Successfully fetched color palettes
     *         content:
     *           application/json:
     *             schema:
     *               type: object
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
     *     summary: Add new message
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - message
     *             properties:
     *               message:
     *                 type: string
     *                 example: "Привет сервер!"
     *     responses:
     *       201:
     *         description: Successfully added new message
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: string
     *                 message:
     *                   type: string
     *                 createdAt:
     *                   type: string
     *                   format: date-time
     */

    app.post("/api/messages", (req, res) => {
        try {
            const { text } = req.body
            res.json(saveMessage(text));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });

    app.put("/api/messages", (req, res) => {
        try {
            const { text, date } = req.body
            res.json(editMessage(text, date));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });

    app.delete("/api/messages", (req, res) => {
        try {
            const { date } = req.body
            res.json(deleteMessage(date));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });
}
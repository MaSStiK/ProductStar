import { getColormagic } from "../services/ColormagicService.js";

export function createColormagicController(app) {
    /**
     * @swagger
     * /api/colormagic/{searchQuery}:
     *   get:
     *     summary: Получить цветовые палитры по API, документация - https://colormagic.app/api/
     *     parameters:
     *       - in: path
     *         name: searchQuery
     *         required: true
     *         schema:
     *           type: string
     *         description: Поиск цветовых палитр по названию (На англ.)
     *     responses:
     *       200:
     *         description: Успешно получен список цветовых палитр
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     */
    app.get("/api/colormagic/:searchQuery", async (req, res) => {
        try {
            const searchQuery = req.params.searchQuery;
            res.json(await getColormagic(searchQuery));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });
}
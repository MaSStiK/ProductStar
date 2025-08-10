import { getJikan } from "../services/JikanService.js";

export function createJikanController(app) {
    /**
     * @swagger
     * /api/jikan/{searchQuery}:
     *   get:
     *     summary: Получить список аниме по API, документация - https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch
     *     parameters:
     *       - in: path
     *         name: searchQuery
     *         required: true
     *         schema:
     *           type: string
     *         description: Поиск аниме по названию (На англ.)
     *     responses:
     *       200:
     *         description: Успешно получен список аниме
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     */
    app.get("/api/jikan/:searchQuery", async (req, res) => {
        try {
            const searchQuery = req.params.searchQuery;
            res.json(await getJikan(searchQuery));
        } catch (err) {
            res.status(500).json({error: err.toString()});
        }
    });
}
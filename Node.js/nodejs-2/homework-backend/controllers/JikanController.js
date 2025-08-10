import { getJikan } from "../services/JikanService.js";

export function createJikanController(app) {
    /**
     * @swagger
     * /api/jikan/{searchQuery}:
     *   get:
     *     summary: Fetch anime list from api, docs - https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch
     *     parameters:
     *       - in: path
     *         name: searchQuery
     *         required: true
     *         schema:
     *           type: string
     *         description: Search term for searching anime
     *     responses:
     *       200:
     *         description: Successfully fetched anime list
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
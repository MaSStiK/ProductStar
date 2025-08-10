import { getColormagic } from "../services/ColormagicService.js";

export function createColormagicController(app) {
    /**
     * @swagger
     * /api/colormagic/{searchQuery}:
     *   get:
     *     summary: Fetch color palettes from api, docs - https://colormagic.app/api/
     *     parameters:
     *       - in: path
     *         name: searchQuery
     *         required: true
     *         schema:
     *           type: string
     *         description: Search term for the color palettes
     *     responses:
     *       200:
     *         description: Successfully fetched color palettes
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
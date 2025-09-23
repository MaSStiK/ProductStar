import { UrlsModel } from "../models/url.js";

export const redirect = async (req, res) => {
    const url = await UrlsModel.getByHash(`/s/${req.params.hash}`);

    if (!url) return res.status(404).send("URL not found");

    return res.redirect(url.longUrl);
};
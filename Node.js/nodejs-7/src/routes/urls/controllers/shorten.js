import { generateHash } from '../utils/hash.js';
import { UrlsModel } from '../models/url.js';

export const shorten = async (req, res) => {
    if (!req.query.url) return res.sendStatus(400);

    const existingUrl = await UrlsModel.get(req.query.url);
    if (existingUrl) return res.send(existingUrl.shortUrl);

    const hash = generateHash();

    await UrlsModel.save(req.query.url, `/s/${hash}`);

    return res.send(`/s/${hash}`);
};
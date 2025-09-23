import  { db } from '../../../services/sqlite.js';
export const UrlsModel = {
    save: (url, shortUrl) => {
        const sql = `INSERT INTO urls (longUrl, shortUrl) VALUES (?,?)`;
        return db.run(sql, url, shortUrl);
    },
    getByHash: (hash) => {
        const sql = `SELECT longUrl FROM Urls WHERE shortUrl = ?`;
        return db.get(sql, hash);
    },
    get: (url) => {
        const sql = `SELECT shortUrl FROM urls WHERE longUrl = ?`;
        return db.get(sql, url);
    }
}
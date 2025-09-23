import  { db } from '../../../services/sqlite.js';

export const UsersModel = {
    add: (firstName, lastName, phoneNumber) => {
        const sql = `INSERT INTO Users (firstName, lastName, phoneNumber) VALUES (?, ?, ?)`;
        return db.run(sql, [firstName, lastName, phoneNumber]);
    },
    getAll: () => {
        const sql = `SELECT * FROM Users`;
        return db.all(sql);
    }
};
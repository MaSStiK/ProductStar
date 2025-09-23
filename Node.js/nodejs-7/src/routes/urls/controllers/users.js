import  { db } from '../../../services/sqlite.js';
import { UsersModel } from '../models/users.js';

export const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.getAll();
        return res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send("Не удалось получить пользователей");
    }

};

export const addUser = async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber } = req.body;
        if (!firstName || !lastName || !phoneNumber) return res.status(400).send("Требуются поля: firstName, lastName, phoneNumber");

        // Проверяем наличие телефона
        const existing = await db.get("SELECT * FROM Users WHERE phoneNumber = ?", [phoneNumber]);
        if (existing) return res.status(409).send("Пользователь с таким номером уже существует");

        await UsersModel.add(firstName, lastName, phoneNumber);
        return res.status(201).send("Пользователь успешно добавлен");
    } catch (err) {
        console.error(err);
        res.status(500).send("Не удалось создать пользователя");
    }
};
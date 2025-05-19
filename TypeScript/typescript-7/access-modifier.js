"use strict";
// Модификаторы доступа (public, private, protected)
class User3 {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
    }
    get name() {
        return this.userName;
    }
    get age() {
        return this.userAge;
    }
    getUserData() {
        const userString = `Пользователь: ${this.userName}, возраст: ${this.userAge}`;
        return userString;
    }
}
const userIvan = new User3("Ivan", 25);
const thisIvan = userIvan.getUserData();
console.log(thisIvan);
// Или же можно сделать запись короче, даже не нужно инициализировать переменные
class User4 {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge;
    }
    get name() {
        return this.userName;
    }
    get age() {
        return this.userAge;
    }
    getUserData() {
        const userString = `Пользователь: ${this.userName}, возраст: ${this.userAge}`;
        return userString;
    }
}

"use strict";
// Имплементация обязывает класс создавать создавать объект который будет иметь поля интерфейса
class User2 {
    constructor(name, age) {
        this.userName = name;
        this.userAge = age;
        this.hasCat = true;
        this.hasDog = true;
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
const userMaxim = new User2("Maxim", 25);
const thisMaxim = userMaxim.getUserData();
console.log(thisMaxim);

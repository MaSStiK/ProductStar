"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getUserData(user) {
    const userString = `Пользователь: ${user.name}, возраст: ${user.age}`;
    return userString;
}
const userAlex = new User("Alex", 20);
const thisAlex = getUserData(userAlex);
console.log(thisAlex);

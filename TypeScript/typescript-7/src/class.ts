interface IUser {
    name: string;
    age: number;
}

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

function getUserData(user: IUser) {
    const userString = `Пользователь: ${user.name}, возраст: ${user.age}`
    return userString
}

const userAlex: IUser = new User("Alex", 20)
const thisAlex = getUserData(userAlex)
console.log(thisAlex);

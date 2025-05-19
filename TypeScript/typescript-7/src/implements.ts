interface IUser2 {
    name: string;
    age: number;
    getUserData(): string;
}

interface IUserPets {
    hasCat: boolean;
    hasDog: boolean;
}

// Имплементация обязывает класс создавать создавать объект который будет иметь поля интерфейса
class User2 implements IUser2, IUserPets {
    userName: string;
    userAge: number;
    hasCat: boolean;
    hasDog: boolean;

    constructor(name: string, age: number) {
        this.userName = name
        this.userAge = age
        this.hasCat = true
        this.hasDog = true
    }

    get name() {
        return this.userName
    }

    get age() {
        return this.userAge
    }

    getUserData() {
        const userString = `Пользователь: ${this.userName}, возраст: ${this.userAge}`
        return userString
    }
}

const userMaxim: IUser2 = new User2("Maxim", 25)
const thisMaxim = userMaxim.getUserData()
console.log(thisMaxim);

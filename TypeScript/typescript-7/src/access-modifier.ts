interface IUser3 {
    // readonly id: number; // Только для чтения
    name: string;
    age: number;
    getUserData(): string;
}

// Модификаторы доступа (public, private, protected)
class User3 implements IUser3 {
    protected userName: string;
    protected userAge: number;

    constructor(name: string, age: number) {
        this.userName = name
        this.userAge = age
    }

    public get name() {
        return this.userName
    }

    public get age() {
        return this.userAge
    }

    public getUserData() {
        const userString = `Пользователь: ${this.userName}, возраст: ${this.userAge}`
        return userString
    }
}

const userIvan: IUser3 = new User3("Ivan", 25)
const thisIvan = userIvan.getUserData()
console.log(thisIvan);


// Или же можно сделать запись короче, даже не нужно инициализировать переменные
class User4 implements IUser3 {
    constructor(protected userName: string, protected userAge: number) {}

    public get name() {
        return this.userName
    }

    public get age() {
        return this.userAge
    }

    public getUserData() {
        const userString = `Пользователь: ${this.userName}, возраст: ${this.userAge}`
        return userString
    }
}
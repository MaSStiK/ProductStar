class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    static createDefault() {
        return new User("default", 0)
    }
    
    show() {
        console.log(`name: ${this.name}, age: ${this.age}`);
    }
}

const user = new User("Иван", 24)
user.show()

const defaultUser = User.createDefault()
defaultUser.show()


class Admin extends User { // Наследуемся от User
    constructor(name, age) {
        super(name, age) // Вызывает конструктор User
        this.type = "admin"
    }

    show() {
        console.log(`name: ${this.name}, age: ${this.age}, type: ${this.type}`);
    }
}

const admin = new Admin("Артем", 15)
admin.show()

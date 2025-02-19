{
    function test(a = 1, b = 5, c = 10) {
        console.log("func:", a, b, c);
    }

    test() // 1 5 10
    test(2, 2, 2) // 2 2 2
    test(1, undefined, 1) // 1 5 1
}

{
    function application(data) {
        // Заменяется только если значение равно undefined
        const [name, age = 18, language = "Английский"] = data
        console.log(`Имя: ${name}, Возраст: ${age}, Язык: ${language}`);
    }

    application(["Олег", 24, "Испанский"])  // Имя: Олег, Возраст: 24, Язык: Испанский
    application(["Иван"])                   // Имя: Иван, Возраст: 18, Язык: Английский
    application(["Артем", , "Турецкий"])    // Имя: Артем, Возраст: 18, Язык: Турецкий
}

{
    const user = {
        name: "Илья",
        age: 30,
        mail: "mail@mail.com"
    }

    const {name, age, mail} = user
    console.log("user:", name, age, mail);

    const {name: newName, age: newAge, mail: newMail} = user
    console.log("user:", newName, newAge, newMail);
}
{ // Создание объекта с названием полей как у переменной
    let name = "Ilya"
    let age = "50"
    let country = "Russia"
    let city = "Moscow"

    let object1 = { // Долгая запись
        name: name,
        age: age,
        country: country,
        city: city
    }

    let object2 = { // Короткая запись
        name, age, country, city
    }

    console.log(object1, object2)
}
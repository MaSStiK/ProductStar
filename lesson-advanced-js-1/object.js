console.log("Object");

{ // Копирование объекта через spread
    let object = {a: 1, b: 2, c: 3}
    let copiedObject = {...object}
    console.log(copiedObject) // {a: 1, b: 2, c: 3}
}

{ // Копирование объекта
    let object = {a: 1, b: 2, c: 3}
    let copiedObject = Object.assign({}, object)
    console.log(copiedObject) // {a: 1, b: 2, c: 3}
}

{ // Объединение объектов
    let object1 = {a: 1, b: 2}
    let object2 = {b: 3, c: 4}
    let combinedObject = {...object1, ...object2}
    console.log(combinedObject) // {a: 1, b: 3, c: 4}
}
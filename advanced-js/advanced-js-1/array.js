console.log("Array");

{ // Копирование массива через spread
    let array = [1, 2, 3]
    let copiedArray2 = [...array]
    console.log(copiedArray2) // [1, 2, 3]
}

{ // Объединение массивов
    let array1 = [1, 2, 3]
    let array2 = [4, 5, 6]
    let combinedArray = [...array1, ...array2]
    console.log(combinedArray) // [1, 2, 3, 4, 5, 6]
}

{ // Добавление элемента | Мутация
    let array = [1, 2, 3, 4]
    array.push(5)
    console.log(array) // [1, 2, 3, 4, 5]
}

{ // Объединение без мутации
    let array = [1, 2, 3, 4]
    array = array.concat(5)
    console.log(array) // [1, 2, 3, 4, 5]
}

{ // Добавление элемента в начало | Мутация
    let array = [2, 3, 4]
    array.unshift(1)
    console.log(array) // [1, 2, 3, 4]
}

{
    let array1 = [1, 2, 3]
    let array2 = [4, 5, 6]
    let array3 = [7, 8, 9]
    let num = 4
    let unicArray = [...new Set([...array1, num, ...array2, ...array3])]
    console.log(unicArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}

{
    let array1 = [1, 2, 3]
    let array2 = [4, 5, 6]
    let array3 = [7, 8, 9]
    let num = 5
    let unicSet = new Set([...array1, num, ...array2, ...array3])
    let unicArray = Array.from(unicSet)
    console.log(unicArray) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
}
{
    // Задача 1
    console.log(1);
    setTimeout(() => console.log(2));
    Promise.resolve().then(() => console.log(3));
    Promise.resolve().then(() => setTimeout(() => console.log(4)));
    Promise.resolve().then(() => console.log(5));
    setTimeout(() => console.log(6));
    console.log(7);

    /* Решение
    1 - Стек
    7 - Стек
    3 - Микро
    5 - Микро
    2 - Макро
    6 - Макро
    4 - Макро
    */
}
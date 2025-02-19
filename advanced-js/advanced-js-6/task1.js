{
    // Задача 1. Число Фибоначчи
    function fib(n) {
        if (n <= 0) return 0
        if (n === 1) return 1
        return fib(n - 1) + fib(n - 2)
    }

    console.log("task 1");
    console.log(fib(3));
    console.log(fib(17));
    console.log(fib(32));
}
let initData: number[] = []
for (let i: number = 1; i <= 100; i++) {
    initData.push(i)
}
console.log("initData:", initData);

let results: number[] = []
for (let num of initData) {
    let _num = num + 2
    if (_num % 2 == 0) results.push(_num)
}
console.log("results:", results);

let squareRootResults: number[] = []
for (let num of results) {
    squareRootResults.push(Math.sqrt(num));
}
console.log("squareRootResults:", squareRootResults);

for (let squareRoot of squareRootResults) {
    if (squareRoot > 7) {
        console.log("squareRoot > 7:", squareRoot);
        break; // Выводим только одно число
    }
}
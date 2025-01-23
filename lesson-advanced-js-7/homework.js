// HomeWork
console.log(({}).prototype === ({}).__proto__); // false

function sayHello() {};
console.log(sayHello.prototype === sayHello.__proto__); // false

function sayHello() {};
function sayGoodbye() {};
console.log(sayHello.__proto__ === sayGoodbye.__proto__); // true
console.log(sayHello.prototype === sayGoodbye.prototype); // false

let age = 18;
console.log(age.prototype === Number.prototype); // false
console.log(age.__proto__ === Number.prototype); // true

class MyClass {};
console.log(MyClass.__proto__ === Function.prototype); // true

function sayHello() {};
console.log(sayHello.__proto__); // Function.prototype

const count = 12;
console.log(count.__proto__); // Number.prototype

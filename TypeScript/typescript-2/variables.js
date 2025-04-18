"use strict";
// Number
let _number = 30;
let hex = 0x00f00d; // 16-ричное число
let binary = 0b10100; // 2-ричное число
let octal = 0o744; // 8-ричное число
let _bigNumber = 12345678901234567890n; // BigInt
console.log("_number:", _number);
_number = 50;
console.log("_number:", _number);
console.log("_bigNumber:", _bigNumber);
// String
let _name = "John Doe";
console.log("_name:", _name);
_name = "Maximilian";
console.log("_name:", _name);
// Boolean
let _boolean = true;
console.log("_boolean:", _boolean);
_boolean = false;
console.log("_boolean:", _boolean);
// Undefined
let _undefined; // Можно использовать для инициализации переменной, значение которой еще неизвестно.
console.log("_undefined:", _undefined);
// Symbol
let id = Symbol("uniqueID");
console.log(id);
// Object с определенным типом свойств
let user = { name: "Jane Doe", age: 25 };
console.log(user);
// Общий объект
let data = { name: "John Doe", age: 30 };
console.log(data);
// Any и unknown
let _any = "any"; // Можно использовать для переменной с неизвестным типом, но не рекомендуется.
let _unknown = "unknown"; // Используйте, когда тип переменной действительно неизвестен и нуждается в проверке перед использованием.
console.log("_any:", _any);
console.log("_unknown:", _unknown);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green; // Присваиваем значение из перечисления
console.log("Color:", c);
// два типа данных
let a; // Переменная может быть либо числом, либо строкой
a = 123; // Присваиваем число
a = "John Doe"; // Присваиваем строку
// a = false; // Ошибка

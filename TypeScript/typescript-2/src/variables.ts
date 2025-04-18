// Number
let _number: number = 30; 
let hex: number = 0x00f00d; // 16-ричное число
let binary: number = 0b10100; // 2-ричное число
let octal: number = 0o744; // 8-ричное число
let _bigNumber: bigint = 12345678901234567890n; // BigInt

console.log("_number:", _number);
_number = 50;
console.log("_number:", _number);
console.log("_bigNumber:", _bigNumber);


// String
let _name: string = "John Doe";
console.log("_name:", _name);
_name = "Maximilian";
console.log("_name:", _name);

// Boolean
let _boolean: boolean = true;
console.log("_boolean:", _boolean);
_boolean = false;
console.log("_boolean:", _boolean);

// Undefined
let _undefined: undefined; // Можно использовать для инициализации переменной, значение которой еще неизвестно.
console.log("_undefined:", _undefined);

// Symbol
let id: symbol = Symbol("uniqueID");
console.log(id);

// Object с определенным типом свойств
let user: { name: string; age: number } = { name: "Jane Doe", age: 25 };
console.log(user);

// Общий объект
let data: object = { name: "John Doe", age: 30 };
console.log(data);

// Any и unknown
let _any: any = "any"; // Можно использовать для переменной с неизвестным типом, но не рекомендуется.
let _unknown: unknown = "unknown"; // Используйте, когда тип переменной действительно неизвестен и нуждается в проверке перед использованием.
console.log("_any:", _any);
console.log("_unknown:", _unknown);

// enum
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green; // Присваиваем значение из перечисления
console.log("Color:", c);

// два типа данных
let a: number | string; // Переменная может быть либо числом, либо строкой
a = 123; // Присваиваем число
a = "John Doe"; // Присваиваем строку
// a = false; // Ошибка
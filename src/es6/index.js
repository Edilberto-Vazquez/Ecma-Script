// ---Propiedad de objetos mejorada---
let nombre = 'Edi'
let age = 32

// forma vieja
obj = {nombre: nombre, age: age}

// ES6
obj2 = {nombre, age}
console.log(obj)
console.log(obj2)

// ---Arrow function---
const nombres = [
    {nombre: 'Edi', age: 32},
    {nombre: 'Jose', age: 27}
]

// Vieja forma function map
let listOfNames = nombres.map(function (item) {
    console.log(item.nombre)
})

// ES6 arrow function map
let listOfNames2 = nombres.map(item => console.log(item.nombre))

// ES6 arrow function forma 1
const listOfNames3 = (nombre, age) => {
    ...
}

// ES6 arrow function forma 2
const listOfNames4 = nombre => {
    ...
}

// ES6 arrow function forma 3
const square = num => num * num
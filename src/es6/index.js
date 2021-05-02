// ---Multilinea---
// version vieja
let lorem = 'frase epica a separar\n'
+ 'otra frase epica que se necesita.'

// ES6
let lorem2 = `otra frase epica quee se necesita
ahora es otra frase epica
`
console.log(lorem)
console.log(lorem2)

// ---Desestructuracion de elementos---
let person = {
    'name': 'oscar',
    'age' : 32,
    'country' : 'MX'
}

// version vieja
console.log(person.name, person.age);

// ES6
let { name, age} = person
console.log(name, age)

// ---Spread operator---
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Pepito', 'Jonas', 'Brayan']

// triple punto (...variable) para unir una arreglo dentro de otro
let education = ['David', ...team1, ...team2]
console.log(education)

// ---LET y CONST---
// LET
// la variable VAR esta de forma global en todo el archivo
{
    var globalVar = 'Global Var'
}
// la variable LET solo esta disponible en ese bloque de codigo
{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)

// CONST
// No se pueden reasignar valores a constantes
const a = 'b'
// Va a marcar un erro si ejecuta
a = 'a '
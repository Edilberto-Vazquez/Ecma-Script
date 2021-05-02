// ---Multilinea---
// version vieja
let lorem = "frase epica a separar\n"
+ "otra frase epica que se necesita."

// ES6
let lorem2 = `otra frase epica quee se necesita
ahora es otra frase epica
`

console.log(lorem)
console.log(lorem2)

// ---Destructuracion de elementos---
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
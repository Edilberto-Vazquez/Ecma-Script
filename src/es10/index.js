// flat metod aplana un arreglo
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))

// flatMap metod permite hacer operaciones con los valores del arreglo y lo aplana
let array = [1,2,3,4,5]

console.log(array.flatMap(value => [value, value * 2]))

// trimStart elimina los espacios en blanco al principio del string
let hello = '        hello world'
console.log(hello)
console.log(hello.trimStart())

// trimEnd elimina los espacios en blanco al final de string
let hello = 'hello world      '
console.log(hello)
console.log(hello.trimEnd())


// ya no es necesario poner error en el catch
try {

} catch (error) {
    error
}

try {

} catch {
    error
}

// fromEntries construye arreglos clave valor a objetos o viceversa
let entries = [['name', 'oscar'], ['age', 32]]
console.log(Object.fromEntries(entries))

// symbol
let mySymbol = `My symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)
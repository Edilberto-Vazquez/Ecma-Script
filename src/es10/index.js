// flat metod aplana un arreglo
let array = [1,2,3, [1,2,3, [1,2,3]]]

console.log(array.flat(2))

// flatMap metod
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
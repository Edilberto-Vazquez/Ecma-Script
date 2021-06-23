// Spread operator extrae las propiedades de un onejto
const obj = {
    nombre: 'Edi',
    age: '23',
    country: 'MX',
}

// Extrae el nombre de los demas elementos del objeto
let { nombre, ...all } = obj
console.log(nombre, all)

let { country, ...all } = obj
console.log(all)

// Propagacion propiedades anida dos objetos
const obj = {
    nombre: 'Edi',
    age: 32,
}

const obj1 = {
    ...obj,
    country: 'MX'
}

console.log(obj1)

// Promise finally
const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
            // ? resolve('Hello World')
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    })
}

// Regex
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
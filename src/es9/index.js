// Operador de reposo extrae las propiedades de un onejto
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

// Propagacion anida dos objetos
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

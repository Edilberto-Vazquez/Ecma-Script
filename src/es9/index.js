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
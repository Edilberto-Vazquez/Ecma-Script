// Clases
class calculator {
    // definicion de variables
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    // metodos
    sum(valueA, valueB) {
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

// creando objeto
const calc = new calculator()
// llamando al metodo sum de la clase calculator
console.log(calc.sum(2,2))

// Modulos
import hello from './module.js'

hello()

// Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
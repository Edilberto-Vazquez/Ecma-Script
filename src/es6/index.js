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
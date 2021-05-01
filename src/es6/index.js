function newFunction(name, age, country) {
    var name = name || 'Edilberto'
    var age = age || 32
    var country = country || 'MEX'
    console.log(name, age, country)
}

// es6
function newFuntion2(name = 'Edilberto', age = 32, country = 'CO') {
    console.log(name, age, country)
}

newFuntion2()
newFuntion2('Edilberto', 12, 'US')

let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)
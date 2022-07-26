let datos = require ('./objeto')

let arrayPaises = datos.paises.a.concat(datos.paises.b)
arrayPaises = arrayPaises.concat(datos.paises.c)

console.log(arrayPaises)
console.log(arrayPaises[datos.favoritos[0]])
console.log(arrayPaises[datos.favoritos[1]])
console.log(arrayPaises[datos.favoritos[2]])
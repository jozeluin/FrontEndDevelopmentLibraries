/* eslint-disable n/handle-callback-err */
const fs = require('node:fs')

console.log('Leyendo el primer archivo....')
// readFileSync es sincrono,readFile es asincrono
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  // <---Ejecutas este callback. Ejecuta la funcion cuando
  // ternime de leer
  console.log('Primer texto:..', text)
})

// console.log(text)

console.log('HAcer cosas mientras lee el archivo')
console.log('Leyendo el segundo archivo....')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('Segundo texto:..', text)
})

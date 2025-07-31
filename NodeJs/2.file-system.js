const fs = require('node:fs') // se recomienda poner "node:"
const stats = fs.statSync('./archivo.txt')

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes
)

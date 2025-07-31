const os = require('node:os') // si encima de los 3 puntos le damos crtl+., lo convierte en modulo JS(mjs)

console.log('Informacion del sistema operativo')
console.log('_________________________________________')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus()) // <-- Podremos escalar procesos en Node
console.log('Memoria Libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)

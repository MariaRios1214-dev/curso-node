const fs = require('node:fs')

const text1 = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer archivo sincrono', text1)
console.log('escenario sincrono , mientras un proceso termina va ejecutando los demas')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo archivo sincrono', text2)
console.log('otro proceso en ejecucion sincrono')

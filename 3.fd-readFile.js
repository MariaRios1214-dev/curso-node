const fs = require('node:fs')

fs.readFile('./archivo.txt', 'utf-8', (error, text) => console.log('primer archivo', text))
console.log('escenario asincrono , mientras un proceso termina va ejecutando los demas')
fs.readFile('./archivo2.txt', 'utf-8', (error, text) => console.log('segundo archivo', text))
console.log('otro proceso en ejecucion')

const text1 = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer archivo sincrono', text1)
console.log('escenario sincrono , mientras un proceso termina va ejecutando los demas')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo archivo sincrono', text2)
console.log('otro proceso en ejecucion sincrono')

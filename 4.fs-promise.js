const fs = require('node:fs/promises')

fs.readFile('./archivo.txt', 'utf-8').then(text => console.log('primer archivo', text))
console.log('escenario asincrono , mientras un proceso termina va ejecutando los demas')
fs.readFile('./archivo2.txt', 'utf-8').then(text => console.log('segundo archivo', text))
console.log('otro proceso en ejecucion')

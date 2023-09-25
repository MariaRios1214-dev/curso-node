const fs = require('node:fs')

const stast = fs.statSync('./archivo.txt')

console.log(
  stast.isFile(),
  stast.isDirectory(),
  stast.isSymbolicLink(),
  stast.size
)

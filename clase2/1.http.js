const http = require('node:http')
const fs = require('node:fs')
// console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  console.log('request received', req.url);
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 //ok
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 //ok
    res.end('<h1>Contacto</h1>')
  } else if (req.url === '/image.jpg') {
    fs.readFile('profile.jpg', (error, data) => {
      if (error) {
        res.statusCode = 500
        res.end('<h1>500 Internal Error Server</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)

      }
    })
  } else {
    res.statusCode = 404
    res.end('<h1>404</h1>')
  }
}
const server = http.createServer(processRequest)


server.listen(desiredPort, () => {
  console.log(`server listening on port http://${desiredPort}`)
})
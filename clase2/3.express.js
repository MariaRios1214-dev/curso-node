const express = require('express')
const dittoJSON = require('./pokemon/ditto.json')

const app = express()

const PORT = process.env.PORT ?? 1211
app.disable('x-powered-by')


app.use(express.json())
// cracion de middleware de express
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   // escuchar el evento data
//   req.on('data', chunk => {
//     console.log('chunk', chunk.toString());

//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     // llamar a una base de datos para guardar la info
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })

// })
app.get('/', (req, res) => {
  res.status(200).send('<h1>Mi página</h1>')
})
app.get('/pokemon/ditto', (req, res) => {
  res.status(200).json(dittoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server listening on  port htpp://localhost:${PORT}`)
})
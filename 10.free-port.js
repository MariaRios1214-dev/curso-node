const net = require('node:net')

function findAvailablePort (desiredPOort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPOort, () => {
      const { port } = server.address()
      server.close(() => { resolve(port) })
    })
    server.on('error', (err) => {
      if (err.code === 'ERRSR') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }

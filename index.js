'use strict'

const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify({ send: 'help' }))
  res.end()
})

server.listen(8080, () => {
  console.log('server has begun the serving')
})

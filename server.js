const http = require('http')
const fs = require('fs')

// ポート番号
const PORT = 3500

// リクエスト・レスポンスの対応内容を記述
const server = http.createServer((request, response) => {
  const url = request.url
  switch (url) {
    case '/':
      fs.readFile('./public/index.html', 'utf-8', (error, data) => {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        response.end()
      })
      break
    default:
      response.writeHead(404)
      response.end()
  }
})

// リスナーを起動
server.listen(PORT, () => {
  console.log(`${new Date()} サーバ起動 http://localhost:${PORT}`)
})
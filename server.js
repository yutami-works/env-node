// モジュールのインポート
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

// メインの処理はサーバー作成時にコールバック関数として渡す
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// サーバー待ち受け
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
import { createServer } from 'http';

// 应用层
const server = createServer((req, res) => {
  res.statusCode = 201;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
})


server.listen(3000, () => {
  console.log("http://localhost:3000");
})



// 基于TCP协议实现http服务
import { createServer } from 'net';
// 传输层
const server = createServer((client) => {
  console.log("address", client.remoteAddress);
  console.log("port", client.remotePort);
  // 接收客户端数据
  client.on("data", data => {
    console.log(data.toString());
    // 获取并解析
    client.write(`HTTP/1.1 200 OK \r
      Content-Type: text/html \r
      Content-Length: 13 \r\n
      <h1>Hello World</h1>
    `);
    // 关闭连接
    client.end();
  })

})
server.listen({
  host: "localhost",
  port: 3000
})
const http = require("http");

http.createServer((req,res)=>{
  //简单处理（没有任何逻辑处理）
  res.setHeader("access-control-allow-origin","*");
  res.end("someText");
}).listen(8080,()=>{
  console.log("监听8080端口");
});

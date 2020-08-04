//node的优势
//1.便于前端入手
//2.性能高
//3.利于和前端代码的整合

//下面创建了一个最简单的node服务    使用 node server.js 命令启动
const http = require("http");
const server = http.createServer((req,res)=>{
  console.log("请求来了");
  res.setHeader("Content-Type","text/html;charset=UTF-8");
  res.write("<html><head></head><body><div>没啥可以给你的了</div></body></html>");
  res.end();
  console.log("请求结束");
});
server.listen(8080,function(){
  console.log("监听端口8080");
});

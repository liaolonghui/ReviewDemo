const http = require("http");
const io = require("socket.io");
const path = require("path");
const fs = require("fs");
//1.建立普通http连接
let server = http.createServer((req,res)=>{
  if(req.url == "/"){
    fs.readFile(path.resolve(__dirname,"index.html"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    });
  }
});
server.listen(8080,()=>{console.log(8080)});
//2.建立websocket
let wsServer = io.listen(server);
wsServer.on("connection",sock=>{
  //sock.emit("name",数据);
  //sock.on("name",function(数据){});
  sock.on("aaa",function(a,b){
    console.log(a+b);
  });
  setInterval(function(){
    sock.emit("timer",new Date().getTime());
  },1000);
});

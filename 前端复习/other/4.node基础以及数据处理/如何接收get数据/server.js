const http = require("http");
const url = require("url");

http.createServer((req,res)=>{
  const {pathname,query} = url.parse(req.url,true);
  console.log(pathname,query);
  res.end("886");
}).listen(80,function(){
  console.log("监听80端口");
});

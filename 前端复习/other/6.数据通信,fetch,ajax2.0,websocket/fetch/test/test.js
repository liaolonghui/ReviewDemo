const http = require("http");
const path = require("path");
const fs = require("fs");

http.createServer((req,res)=>{
  if(req.url == "/"){
    fs.readFile(path.resolve(__dirname,"./index.html"),(err,data)=>{
      res.end(data);
    });
  }else if(req.url == "/data/1.txt"){
    fs.readFile(path.resolve(__dirname,'./data/1.txt'),function(err,data){
      res.end(data);
    });
  }
}).listen(80,function(){
  console.log(80);
});

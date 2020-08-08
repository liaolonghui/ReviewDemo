const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req,res)=>{
  if(req.url == "/"){
    fs.readFile(path.resolve(__dirname,"index.html"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    })
  }else if(req.url == "/image/1.jpg"){
    fs.readFile(path.resolve(__dirname,"./image/1.jpg"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    })
  }
}).listen(80,()=>{
  console.log(80);
});

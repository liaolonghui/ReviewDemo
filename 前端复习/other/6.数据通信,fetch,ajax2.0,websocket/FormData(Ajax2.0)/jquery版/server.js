const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

http.createServer((req,res)=>{
  if(req.url == "/"){
    fs.readFile(path.resolve(__dirname,"index.html"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    });
  }else if(req.url == "/jquery.js"){
    fs.readFile(path.resolve(__dirname,"jquery.js"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    });
  }else if(req.url == "/form"){
    let arr = [];
    req.on("data",(data)=>{
      arr.push(data);
    });
    req.on("end",()=>{
      let buffer = Buffer.concat(arr);
      console.log(querystring.parse(buffer.toString()));
    });
    res.end("886");
  }
}).listen(80,()=>{
  console.log(80);
});

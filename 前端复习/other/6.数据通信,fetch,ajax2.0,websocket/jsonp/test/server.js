const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

http.createServer((req,res)=>{
  let {pathname,query} = url.parse(req.url,true);
  if(pathname == "/"){
    fs.readFile(path.resolve(__dirname,"index.html"),(err,data)=>{
      if(err){
        throw err;
      }
      res.end(data);
    })
  }else if(pathname == "/callback"){
    res.end(query.cb+"('我是jsonp方式请求得到的后端数据')");
  }
}).listen(80,()=>{
  console.log(80);
});

const http = require("http");
const path = require("path");
const fs = require("fs");

//request response 两个对象
http.createServer((req,res)=>{
  //request
  console.log(req.url);
  console.log(req.method);
  console.log(req.httpVersion);
  console.log(req.headers);
  console.log(req.rawHeaders);

  //使用fs模块
  fs.readFile(path.resolve(__dirname,"./data/data.json"),function(err,data){
    if(err){
      throw err;
    }
  });

  const data = JSON.stringify(req.headers);
  fs.writeFile(path.resolve(__dirname,"./data/data.json"),data,{"flag":"a"},function(err){
    if(err){
      throw err;
    }else{
      console.log("成功添加入data.json文件中");
    }
  });


  //response
  res.setHeader("Content-type","text/html;charset=UTF-8");
  res.statusCode = 200;
  res.statusMessage = "OK";
  res.write("<div>随便发点</div>");
  res.end();

}).listen(80,function(){
  console.log("监听80端口");
});

//仅处理普通post数据,无法处理post文件数据
const http = require("http");
const querystring = require("querystring");
const fs = require("fs");

//request对象的on方法

http.createServer((req,res)=>{
  //创建一个数组保存buffer数据
  let arr = [];
  req.on("data",buffer=>{
    arr.push(buffer);
  });
  req.on("end",()=>{
    //将保存buffer数据的数组合并为完整buffer
    let buffer = Buffer.concat(arr);
    let json = querystring.parse(buffer.toString());//先把buffer转化为字符串，再转化为对象
    let data = JSON.stringify(json);
    //写入文件中
    fs.writeFile("./data.json",data,{"flag":"a"},function(err){
      if(err){
        throw err;
      }else{
        console.log("成功");
      }
    });
  });
  res.end("post OK");
}).listen(80,function(){
  console.log("监听80端口");
});

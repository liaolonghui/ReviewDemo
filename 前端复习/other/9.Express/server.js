const express = require("express");
const body = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");

let server = express();  //实例化一个server
server.listen(80,()=>{
  console.log(80);
});

//中间件
server.use(body.urlencoded({   //body-parser中间件
  extended: false,
}));

let obj = multer({       //multer中间件
  dest: "./static/upload"
});
server.use(obj.any());  //any()即接收任何文件

server.use(cookieParser(
  "qwertyuiolkjhgfdsxcvbnm"  //密匙
));  //cookie-parser中间件

//Router
server.get("/",(req,res,next)=>{
  res.send("这是主页");
});
server.get("/a",(req,res,next)=>{
  res.send(200,"芜湖起飞");
  req.usertype = 5;  //通过往req对象上绑定属性的方式实现传参
  next();
});
server.get("/a",(req,res,next)=>{
  console.log(req.query);    //无需中间件，直接使用req.query
  console.log(req.usertype);   //参数
});
server.get("/cookie",(req,res,next)=>{
  //获取cookie以及发送cookie
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.cookie("amount",99.8,{
    //如果cookie中设置了HttpOnly属性，那么通过js脚本将无法读取到cookie信息，
    //这样能有效的防止XSS攻击，窃取cookie内容，这样就增加了cookie的安全性。
    httpOnly: true,
    maxAge: 14*86400*1000,
    signed: true,
    //domain
    //path
  });
  if(req.signedCookies.isVisit){
    res.send("欢迎再次光临");
  }else{
    res.cookie("isVisit",1,{
      httpOnly: true,
      maxAge: 24*60*60*1000,
      signed: true,
    });
    res.send("欢迎初次光临");
  }
});
server.post("/reg",(req,res,next)=>{
  console.log(req.body);  //body-parser中间件处理完后的数据保存在req.body
  next();
});
server.post("/reg",(req,res,next)=>{
  console.log(req.files);    //multer
  res.send("upload success");
});

//中间件static
server.use(express.static("./static/"));

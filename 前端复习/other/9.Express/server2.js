const express = require("express");
const cookieSession = require("cookie-session");

let server = express();
server.listen(80);

//cookieSession
server.use(cookieSession({
  keys: ['wertyuiolkjhgfds','srdtfyuijhbvgfcd','kjhbvcdftyhj'],
  maxAge: 20*60*1000,  //每20min换
}));

server.get("/",(req,res,next)=>{
  if(!req.session['view']){
    req.session['view']=1;
  }else{
    req.session['view']++;
  }
  res.send(`欢迎您第${req.session['view']}次到访本站`);
});


//可以使用express-mysql-session将其保存在mysql中

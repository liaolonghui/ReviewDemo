//可以使用postman模拟http请求测试
const http = require("http");
const url = require("url");
const fs = require("fs");
const mysql = require("mysql");
const co = require("co-mysql");

let dbase = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "hLIAO5201314",
  database: "userdata"
});
let db = co(dbase);  //使用co-mysql让sql操作可以异步async/await

http.createServer(async (req,res)=>{
  const {pathname,query} = url.parse(req.url,true);
  let {name,age} = query;
  if(!name || !age){
    res.end("姓名和年龄不能为空");
  }else if(name.length > 32){
    res.end("姓名最长32个字");
  }else if(age.length > 3){
    res.end("年龄最长3个字");
  }else{
    try{
      let data = await db.query('SELECT ID FROM user_table WHERE name = "'+name+'"');
      if(data.length > 0){
        res.end("该姓名已经登记过");
      }else{
        await db.query('INSERT INTO user_table(name,age) VALUES("'+name+'",'+age+')');
        res.end("注册成功");
      }
    }catch(e){
      res.write("数据库出错");
      res.end();
    }
  }
}).listen(80,()=>{
  console.log(80);
});

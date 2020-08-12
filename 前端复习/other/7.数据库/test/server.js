const http = require("http");
const mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hLIAO5201314",
  database: "userdata"
});
db.query('INSERT INTO user_table(name,age) VALUES("歪嘴昊龙",10)');
db.query('SELECT * FROM user_table',(err,data)=>{
  if(err){
    console.log("错误:",err);
  }else{
    console.log(JSON.stringify(data));
  }
});

//INSERT    DELETE    UPDATE    SELECT

//koa配合mysql
const Koa = require("koa");
const mysql = require("mysql");
const co = require("co-mysql");

let conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'hLIAO5201314',
  database: 'userdata'
});
let db = co(conn);

let server = new Koa();
server.listen(80);
server.context.db = db;  //server.context

server.use(async ctx=>{
  try{
    let data = await ctx.db.query('SELECT * FROM user_table');
    ctx.body = data;
  }catch(e){
    ctx.throw(500,'database error');
  }
});

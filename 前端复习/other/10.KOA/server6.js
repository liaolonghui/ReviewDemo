//koa-session
const Koa = require("koa");
const session = require("koa-session");

let server = new Koa();
server.listen(80);

//keys别忘了
server.keys = [
  'asadfghjggfdfg',
  'wefrgthtyghvsd',
  'iuytrescvbasdf'
];
server.use(session({
  maxAge: 20*60*1000,
  renew: true  // 自动续期
},server));
server.use(async ctx=>{
  if(!ctx.session['view']){
    ctx.session['view'] = 1;
  }else{
    ctx.session['view']++;
  }
  ctx.body = `欢迎你第${ctx.session.view}次到访`;
});

//koa中cookie是自带的
server.use(async ctx=>{
  //ctx.cookies.get();
  //ctx.cookies.set();
  ctx.cookies.set('index','wbj',{
    //domain  path  httpOnly
    maxAge: 14*86400*1000,
    signed: true
  })
});

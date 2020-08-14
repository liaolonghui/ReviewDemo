const pug = require('pug');
pug.renderFile('../template/1.pug',{
  pretty:true,
  title:'test',
  users:[
    {name: 'blue'},
    {name: '张三'},
    {name: '李四'},
    {name: '王五'}
  ]
},(err,data)=>{    //pretty用于美化，正式工作中不加。
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

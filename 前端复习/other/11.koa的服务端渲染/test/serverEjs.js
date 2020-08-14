const ejs = require("ejs");

ejs.renderFile('../template/1.ejs',{
  arr: [12,58,45,32,81]
},(err,data)=>{
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});

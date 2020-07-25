let p = new Promise(function(resolve,reject){
  //$.ajax()会返回一个promise对象
  $.ajax({
    url: "./data.json",
    dataType: "json",
    success(data){
      resolve(data);
    },
    error(res){
      reject(res);
    }
  });
});

p.then(function(data){
  console.log("成功");
  console.log(`收到的数据是${data}`);
},function(res){
  console.log("失败");
  console.log(res);
})

//Promise.all()    当这些请求有“逻辑”时，Promise无法解决
// Promise.all([
//   $.ajax({url:"./data1.json",dataType:"json"}),
//   $.ajax({url:"./data2.json",dataType:"json"}),
//   $.ajax({url:"./data3.json",dataType:"json"}),
// ]).then(function(arr){
//   console.log(arr);
// },function(res){
//   console.log(res);
// })


//使用async与await
// async function show(){
//   let data1 = await $.ajax({url:"./data1.json",dataType:"json"});
//   if(data1.a < 10){//只有当data1.json数据中的a小于10时才会请求data2.json数据
//     let data2 = await $.ajax({url:"./data2.json",dataType:"json"});
//   }else{
//     //...
//   }
//   //...
// }
// show();

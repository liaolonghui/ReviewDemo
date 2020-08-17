const asyncFunc = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('123');
    },1000);
  });
}

const handle = async function() {
  const data = await asyncFunc();
  console.log(add(data, 5));
}

handle();

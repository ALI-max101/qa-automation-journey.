const my_Promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello from promise");
    },1000);
});
my_Promise
  .then(message=>{
    console.log(message);
  })
  .catch(error=>{
    console.log("error");
  });

console.log("this print first");
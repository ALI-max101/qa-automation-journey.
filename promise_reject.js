console.log("practising promise using reject");
const learning_Promise=new Promise((resovle,reject)=>{

    setTimeout(()=>{
        reject(" i am practising reject using promise");
    },1000);
});

learning_Promise 
  .then(message=>{
    console.log("should not print this message i think so");
  })
  .catch(error=>{
    console.log(error);
  });

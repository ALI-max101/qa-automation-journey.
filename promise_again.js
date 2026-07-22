const promise=new Promise((resolve,reject) =>{
setTimeout(()=>{
    resolve ("download complete");
},2000);
});

promise
 .then(x=>{
    console.log(x);
 })


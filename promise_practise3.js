function getuser(){
     return Promise.resolve({name:"sara",id:5});
}
function getorders(userId){
     return Promise.resolve(["shoes","bags"]);
}

getuser()
   .then(trust=>{
    console.log(trust.name);
    console.log(trust.id);
    return getorders(trust.id);
   })

   .then(userId=>{
    console.log(userId[0]);
    console.log(userId[1]);
   })
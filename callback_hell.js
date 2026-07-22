function orderfood(callback){
    setTimeout(()=>{
        console.log("food ordered");
         callback();
    },1000)
    
}

function cookfood(callback){
   setTimeout(()=>{
        console.log("food cooking");
         callback();
    },1000)
}
function servefood(callback){
   setTimeout(()=>{
        console.log("food serving");
         callback();
    },1000)
}
function paybill(callback){
   setTimeout(()=>{
        console.log("kindly play bill");
         if (callback)callback();
    },1000)
}

orderfood(()=>{
    cookfood(()=>{
        servefood(()=>{
            paybill();
        })
    })
})
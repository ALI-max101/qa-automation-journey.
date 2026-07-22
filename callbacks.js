function login (callback){
    setTimeout(()=>{
        
            console.log("loging in ...");
            callback();
    },1000);
}

function getprofile (callback){
    setTimeout(()=>{
            console.log("fetching profile ...");
            callback();
    },1000);
}

function logingout (callback){
    setTimeout(()=>{
            console.log("loging out ...");
           if (callback) callback();
    },1000);
}
login(()=>{
    getprofile(()=>{
        logingout();
    })
})
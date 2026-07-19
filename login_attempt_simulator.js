console.log("Log in attempt simulator.")
const login=function(username,password,attempts){

    if(username=="admin"&&password=="test123"&&attempts<=3){
        return ("login Successfull.");
    }
    else if (username=="admin"&&password=="test123"&&attempts>3){
        return ("Account locked");
    }
    else{
        return ("Wrong credentials");
       

    }
}

 console.log (login("admin", "test123", 2));
 console.log (login("admin", "test123", 4));
 console.log (login("adman", "test123", 2));
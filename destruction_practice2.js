const user = {
  id:1,
  name:"Ali",
  address:{
    city:"Lahore"
  },
  skills:["JS","React","Node"]
};

const{name}=user;
console.log("user name is : "+name);
const{address:{city}}=user;
console.log("user city  is : "+city);
const{skills:[firstskill]}=user;
console.log("First skill is :"+firstskill);
const{skills:[first,...rest]}=user;
console.log("The rest skills are :"+rest);
const{id:userid}=user;
console.log(userid);
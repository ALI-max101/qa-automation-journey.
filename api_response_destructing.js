const response = {
  status:200,
  data:{
    user:{
      id:1,
      name:"Ali",
      email:"ali@test.com"
    }
  }
};
const{status,data:{user:{id,name,email}}}=response;
console.log("Status:",status);
console.log("ID:",id);
console.log("Name:",name);
console.log("Email:",email);
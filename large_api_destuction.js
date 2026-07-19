const response={
data:{
company:{
name:"Google",
location:"USA",
employees:[
{
id:1,
personal:{
name:"Ali",
email:"ali@test.com"
},
job:{
title:"QA",
salary:120000
}
},
{
id:2,
personal:{
name:"Sara",
email:"sara@test.com"
},
job:{
title:"Developer",
salary:150000
}
}
]
}
}
};
const{data:{company:{name}}}=response;
console.log("Company Name:",name);

const{data:{company:{employees:[{personal:{name:employeeName}}]}}}=response;
console.log("First Employee Name:",employeeName);
const{data:{company:{employees:[,{job:{salary:secondEmployeeSalary}}]}}}=response;
console.log("Second Employee Salary:",secondEmployeeSalary);
const{data:{company:{employees:[,{personal:{name:secondEmployeename}}]}}}=response;
console.log(secondEmployeename);
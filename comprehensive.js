const employees=[
{
id:1,
name:"Ali",
department:"IT",
salary:90000
},
{
id:2,
name:"Sara",
department:"HR",
salary:70000
},
{
id:3,
name:"Ahmed",
department:"IT",
salary:120000
},
{
id:4,
name:"John",
department:"Finance",
salary:95000
}
];

//Finding All IT Employes.
const It=employees.filter(employee=>employee.department=="IT");
Object.values(It).forEach(value => console.log(value));
 
// Finding Average Salary.
const salaries=[];
 employees.forEach(employee=>salaries.push(employee.salary));
 let avg=0;
 let number=salaries.length;
 for(let i=0;i<salaries.length;i++){
    avg+=salaries[i];
 }
 console.log("AVERGAEG SALARY IS :"+avg/number);
// Finding Highest Salary.
let highestsalary=0;
for(let i=0;i<salaries.length;i++){
    if(highestsalary<salaries[i]){
        highestsalary=salaries[i];
    }
}
 console.log("Highest Salary is  :"+highestsalary);

 // increase Every Salary by 15 percent.
employees.forEach(employees=>employees.salary+=0.15*employees.salary);
employees.forEach(employee=>console.log(employee));
//Finding employ id 3.
const id_3=employees.find(employee=>employee.id==3);
console.log("Employe details with id three are following :")
console.log(id_3);
// Counting employes in each department.
const departmentCount = employees.reduce((acc, employee) => {
    if (acc[employee.department]=== undefined) {
        acc[employee.department] = 1;
    } else {
        acc[employee.department]++;
    }
    return acc;
},{});
console.log("Employe count in each department is following :");
console.log(departmentCount);

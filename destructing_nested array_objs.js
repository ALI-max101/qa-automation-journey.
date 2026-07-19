const response = {
  company:{
    employees:[
      {
        name:"Ali",
        salary:120000
      },
      {
        name:"Sara",
        salary:140000
      }
    ]
  }
};
// direct destructuring of nested array of objects .
const{company:{employees:[{name:emp1Name,salary:emp1Salary},{name:emp2Name,salary:emp2Salary}]}}=response;
// destructing of the nested array of objects into separate variables
const {
  company: {
    employees: [firstEmployee, secondEmployee]
  }
} = response;

// First employee name
const { name: firstName } = firstEmployee;

// Second employee salary
const { salary: secondSalary } = secondEmployee;

console.log("First Employee:", firstEmployee);  // { name: "Ali", salary: 120000 }
console.log("Second Employee:", secondEmployee); // { name: "Sara", salary: 140000 }
console.log("First Employee Name:", firstName);  // "Ali"
console.log("Second Employee Salary:", secondSalary); // 140000
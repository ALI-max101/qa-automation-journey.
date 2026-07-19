const personal = {
  name:"Ali",
  age:24
};

const contact = {
  email:"ali@test.com",
  phone:"123456"
};

const job = {
  title:"QA Engineer",
  salary:120000
};
// new employee with update salary.
const newobject={...personal,...contact,...job};
console.log(newobject);
const updatedEmployee = {
  ...employee,
  salary: 150000
};
// employee without salary.
const { salary, ...employeeWithoutSalary } = updatedEmployee;

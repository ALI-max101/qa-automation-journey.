const employee = {
  id: 101,
  personal: {
    name: "Ahmed",
    age: 27,
    address: {
      city: "Karachi",
      country: "Pakistan"
    }
  },
  company: {
    department: "Engineering",
    salary: 120000
  }
};

console.log(employee.personal.address.city);
employee.company.salary=140000;
employee.personal.address.zipcode=8500;
delete employee.personal.age;
employee.company.department="Sciences";
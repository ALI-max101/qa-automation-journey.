const employee = {
  personal: {
    name: "Sara",
    age: 28
  },
  company: {
    department: "QA",
    location: {
      city: "Islamabad",
      floor: 5
    }
  }
};

const { personal: { name:Name, age }, company: { department, location: { city, floor } } } = employee;
console.log(Name);
console.log(age);
console.log(department);
console.log(city);
console.log(floor);
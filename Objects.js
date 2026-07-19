const student = {
  name: "Ali",
  age: 21,
  university: "FAST",
  cgpa: 3.4
};

student.cgpa=2.5;
student.graduated="yes";
delete student.age;
for (let key in student){
    console.log(student[key]);
}

if("name" in student) {
    console.log("Yes name exist as a property.");
}

else{
    console.log("name doesnt exist");
}

// important to  remember to print key and values only of objects.
Object.keys(student).forEach(key => console.log(key));
Object.values(student).forEach(value => console.log(value));
const university = {
  name: "MIT",
  departments: {
    cs: {
      students: 400,
      teachers: 30
    },
    ee: {
      students: 300,
      teachers: 25
    }
  }
};
console.log("Total Students :"+(university.departments.cs.students+university.departments.ee.students));
console.log("Total Teachers :"+(university.departments.cs.teachers+university.departments.ee.teachers));
// Importan to remember when to add an object inside an exisiting object , must remember.
university.departments.mechanical={
    students:350,
    teachers:34
};
//important to remember when to change the key inisde an object.
university.departments["computer science"]=university.departments.cs;

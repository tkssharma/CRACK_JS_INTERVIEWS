// Define a Person class
// It will as a Base class
// in the inheritance hirarechy
class Person {
 // Initializing the name
 constructor(name) {
     this.name = name;;
 }

 // toString method returns the name
 toString_Person() {
     return "Name of person = " + this.name;
 }
}

// Defining the student class
// It is the derived class
// It extends Person
class Student extends Person {
 // Initializing the name and id
 constructor(name, Sid) {
     // calling the super class constructor
     super(name);

     // Initializing Sid
     this.Sid = Sid;
 }

 // toString method retuns the student detail
 // Overriding the toString method from base
 // class
 toString_Student() {
     // Calling the toString method of the base
     // class to get the name
     return super.toString_Person() + ", Student Id = "
         + this.Sid
 }
}

// creating Object
var Student_1 = new Student("Sumit", "GFG_123");

// Printing the name and Sid of Student_1
console.log(Student_1.toString());
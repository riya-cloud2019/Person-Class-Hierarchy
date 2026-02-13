const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return {
      role: "Person",
      name: this.name,
      age: this.age,
      message: `Hello, my name is ${this.name}.`
    };
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getDetails() {
    return {
      role: "Student",
      name: this.name,
      age: this.age,
      message: `Hello, my name is ${this.name} and I'm studying ${this.major}.`,
      major: this.major
    };
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    return {
      role: "Teacher",
      name: this.name,
      age: this.age,
      message: `Hello, my name is ${this.name} and I teach ${this.subject}.`,
      subject: this.subject
    };
  }
}

app.get("/people", (req, res) => {
  const people = [
    new Person("Alex Johnson", 30).getDetails(),
    new Student("Emma Watson", 20, "Computer Science").getDetails(),
    new Teacher("Dr. James Wilson", 45, "Mathematics").getDetails()
  ];

  res.json(people);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

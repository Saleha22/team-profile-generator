const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, email, id, school) {
    super(name, email, id, school);
    this.school = school;
  }

  getRole() {
    return "intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;

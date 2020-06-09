// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
// The Intern Class is responsible for displaying data inherited from Employee class and School of Intern
class Intern extends Employee{
    constructor(userName,userId,userEmail,userSchool) {
        super(userName,userId,userEmail);
    //   this.name=userName;
    //   this.id=userId;
    //   this.email=userEmail;
      this.school=userSchool;
    
    }
  
    // Returns Intern data.  JavaScript automatically uses the value we return here
    // getName() {
    //   return this.name;
    // }
    // getId() {
    //   return this.id;
    // }
    // getEmail() {
    //   return this.email;
    // }
    getRole() {
      return "Intern";
    }
    getSchool() {
        return this.school;
    }
 
  }
  
  module.exports = Intern;

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
// The Engineer Class is responsible for displaying both the data inherited from Employee class and unique GitHub username
class Engineer extends Employee {
    constructor(userName,userId,userEmail,userGithub) {
        super(userName,userId,userEmail);
    //   this.name=userName;
    //   this.id=userId;
    //   this.email=userEmail;
      this.github=userGithub;
    
    }
  
    // Returns Engineer data. JavaScript automatically uses the value we return here
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
      return "Engineer";
    }
    getGithub() {
        return this.github;
    }
 
  }
  
  module.exports = Engineer;

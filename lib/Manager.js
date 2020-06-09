// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");
// The Manager Class is responsible for displaying both the data inherited from Employee class and unique office number data.
class Manager extends Employee {
    constructor(userName,userId,userEmail,userOfficeNumber) {
        super(userName,userId,userEmail);
    //   this.name=userName;
    //   this.id=userId;
    //   this.email=userEmail;
      this.officeNumber=userOfficeNumber;
    
    }
  
    // Returns Manager data.  JavaScript automatically uses the value we return here
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
      return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
 
  }
  
  module.exports = Manager;

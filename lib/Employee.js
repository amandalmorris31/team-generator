// TODO: Write code to define and export the Employee class

// The Employee Class is responsible for displaying the core employee descriptive info
class Employee {
    constructor(userName,userId,userEmail) {
      this.name=userName;
      this.id=userId;
      this.email=userEmail;
    
    }
  
    // Returns the core employee info of name, id, email, and role
    //    JavaScript automatically uses the value we return here
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getRole() {
      return "Employee";
    }
 
  }
  
  module.exports = Employee;

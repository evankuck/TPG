import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        // rewriting the getRole from Employee.js so that it says Engineer instead of Employee
        return 'Engineer';
    }
}

export default Engineer;

/* 
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

In addition to Employee's properties and methods, Engineer will also have:

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'
*/
const Employee = require('./Employee');

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

module.exports = Engineer;

/* 
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

*/
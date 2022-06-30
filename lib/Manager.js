const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }
    getOffice() {
        return this.office
    }
    getRole() {
        return "Manager"
    }
    
}

module.exports = Manager;

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const Employee = require("../lib/Employee");

describe("Employee", () => {
    const name = "John";
    const id = 0;
    const email = "john1@email.com"
    // create an employee to use on all tests :D
    const employee = new Employee(name, id, email)

    test("returns an Employee object", () => {
        expect(employee).toBeInstanceOf(Employee);
    })
    test("returns an object with a name", () => {
        expect(employee.getName()).toBe(name);
    })
    test("returns an object with an id", () => {
        expect(employee.getId()).toBe(id);
    })
    test("returns an object with a email", () => {
        expect(employee.getEmail()).toBe(email)
    })
    test("returns an object with a role of Employee", () => {
        expect(employee.getRole()).toBe("Employee");
    })
});

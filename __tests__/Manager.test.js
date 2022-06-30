const Manager = require("../lib/Manager");

describe("Manager", () => {
    const name = "Bill";
    const id = 1;
    const email = "Bill1@email.com"
    // create an employee to use on all tests :D
    const Manager = new Manager(name, id, email)

    test("to be an instance of an Manager object", () => {
        expect(Manager).toBeInstanceOf(Manager);
    })
    test("to be an instance of an Employee object", () => {
        expect(manager).toBeInstanceOf(Employee);
    })
    test("returns an object with a name", () => {
        expect(manager.getName()).toBe(name);
    })
    test("returns an object with an id", () => {
        expect(manager.getId()).toBe(id);
    })
    test("returns an object with a email", () => {
        expect(manager.getEmail()).toBe(email)
    })
    test("returns an object with a role of Manager", () => {
        expect(manager.getRole()).toBe("Manager");
    })
    test("returns an object with a github", () => {
        expect(office.getOffice()).toBe(office)
    })
});
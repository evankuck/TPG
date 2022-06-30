const Intern = require("../lib/Intern");

describe("Intern", () => {
    const name = "Braydon";
    const id = 3;
    const email = "Braydon@email.com"

    const Intern = new Intern(name, id, email, school)

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
    test("returns an object with a role of Intern", () => {
        expect(employee.getRole()).toBe("Intern");
    })
    test("returns an object with a school", () => {
        expect(employee.getSchool()).toBe(school)
    })
});
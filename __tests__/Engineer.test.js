const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const name = "John";
    const id = 2;
    const email = "john1@email.com"
    const github = "john1";
    // create an engineer to use on all tests :D
    const engineer = new Engineer(name, id, email, github)

    test("to be an instance of an Engineer object", () => {
        expect(engineer).toBeInstanceOf(Engineer);
    })
    test("to be an instance of an Employee object", () => {
        expect(engineer).toBeInstanceOf(Employee);
    })
    test("returns an object with a name", () => {
        expect(engineer.getName()).toBe(name);
    })
    test("returns an object with an id", () => {
        expect(engineer.getId()).toBe(id);
    })
    test("returns an object with a email", () => {
        expect(engineer.getEmail()).toBe(email)
    })
    test("returns an object with a role of Engineer", () => {
        expect(engineer.getRole()).toBe("Engineer");
    })
    test("returns an object with a github", () => {
        expect(engineer.getGithub()).toBe(github)
    })
});
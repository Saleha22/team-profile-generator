const Intern = require("../Intern");
describe("Intern", () => {
  it("Should return the expected name", () => {
    const intern = new Intern("Aisha");
    expect(intern.getName()).toEqual("Aisha");
  });
  it("Should return the expected email", () => {
    const intern = new Intern("Aisha", "email@email.com");
    expect(intern.getEmail()).toEqual("email@email.com");
  });
  it("Should return the expected id", () => {
    const intern = new Intern("Aisha", "email@email.com", "123456", "mocho");
    expect(intern.getId()).toEqual("123456");
  });
  it("Should return the expected school name", () => {
    const intern = new Intern(
      "Aisha",
      "email@email.com",
      "123456",
      "Some school Name"
    );
    expect(intern.getSchool()).toEqual("Some school Name");
  });
  it("Should return the expected role", () => {
    const intern = new Intern("Aisha", "email@email.com", "123456", "mocho");
    expect(intern.getRole()).toEqual("intern");
  });
});

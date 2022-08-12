const Engineer = require("../Engineer");
describe("Engineer", () => {
  it("Should return the expected name", () => {
    const engineer = new Engineer("Aisha");
    expect(engineer.getName()).toEqual("Aisha");
  });
  it("Should return the expected email", () => {
    const engineer = new Engineer("Aisha", "email@email.com");
    expect(engineer.getEmail()).toEqual("email@email.com");
  });
  it("Should return the expected id", () => {
    const engineer = new Engineer(
      "Aisha",
      "email@email.com",
      "123456",
      "mocho"
    );
    expect(engineer.getId()).toEqual("123456");
  });
  it("Should return the expected github username", () => {
    const engineer = new Engineer(
      "Aisha",
      "email@email.com",
      "123456",
      "mocho"
    );
    expect(engineer.getGithubUsername()).toEqual("mocho");
  });
  it("Should return the expected role", () => {
    const engineer = new Engineer(
      "Aisha",
      "email@email.com",
      "123456",
      "mocho"
    );
    expect(engineer.getRole()).toEqual("engineer");
  });
});

const Manager = require("../Manager");
describe("Manager", () => {
  it("Should return the expected name", () => {
    const manager = new Manager("Aisha");
    expect(manager.getName()).toEqual("Aisha");
  });
  it("Should return the expected email", () => {
    const manager = new Manager("Aisha", "email@email.com");
    expect(manager.getEmail()).toEqual("email@email.com");
  });
  it("Should return the expected id", () => {
    const manager = new Manager("Aisha", "email@email.com", "123456", "mocho");
    expect(manager.getId()).toEqual("123456");
  });
  it("Should return the expected office number", () => {
    const manager = new Manager(
      "Aisha",
      "email@email.com",
      "123456",
      "02033474747"
    );
    expect(manager.getOfficeNumber()).toEqual("02033474747");
  });
  it("Should return the expected role", () => {
    const manager = new Manager("Aisha", "email@email.com", "123456", "mocho");
    expect(manager.getRole()).toEqual("manager");
  });
});

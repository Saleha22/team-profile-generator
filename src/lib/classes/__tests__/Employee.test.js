const Employee = require("../Employee");
describe("Employee", () => {
  it("Should return the expected name", () => {
    const employee = new Employee("Aisha");
    expect(employee.getName()).toEqual("Aisha");
  });
  it("Should return the expected email", () => {
    const employee = new Employee("Aisha", "email@email.com");
    expect(employee.getEmail()).toEqual("email@email.com");
  });
  it("Should return the expected id", () => {
    const employee = new Employee(
      "Aisha",
      "email@email.com",
      "123456",
      "mocho"
    );
    expect(employee.getId()).toEqual("123456");
  });
});

const inquirer = require("inquirer");
const Manager = require("./lib/classes/Manager");
const managerQuestions = require("./lib/questions/managerQuestions");
const engineerQuestions = require("./lib/questions/engineerQuestions");
const internQuestions = require("./lib/questions/internQuestions");
const generateHTML = require("./utils/HTMLGenerator");
const options = [
  {
    type: "list",
    message: "What operation do you want to perform?",
    name: "choice",
    choices: [
      {
        name: "Create Engineer",
        value: "engineer",
        loop: true,
      },
      {
        name: "Create Intern",
        value: "intern",
        loop: true,
      },
      {
        name: "Exit the app",
        value: "quit",
        loop: false,
      },
    ],
  },
];

const init = async () => {
  const employees = {
    manager: [],
    intern: [],
    engineer: [],
  };
  const managerAnswers = await inquirer.prompt(managerQuestions);
  const manager = new Manager(
    managerAnswers.name,
    managerAnswers.email,
    managerAnswers.employeeID,
    managerAnswers.officeNumber
  );
  employees.manager.push(manager);
  let inProgress = true;
  while (inProgress) {
    const { choice } = await inquirer.prompt(options);
    if (choice === "quit") {
      inProgress = false;
    }
    if (choice === "engineer") {
      const engineer = await inquirer.prompt(engineerQuestions);
      employees.engineer.push(engineer);
    }
    if (choice === "intern") {
      const intern = await inquirer.prompt(internQuestions);
      employees.intern.push(intern);
    }
  }
  console.log(managerAnswers);
  console.log(employees);
  generateHTML(employees);
};
init();

// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require("inquirer");

// team array
const teamArray = []; 


function runApp () {
// start of employee prompts 

function createEmployee () {
    inquirer.prompt([ 
    {
        type: "list",
        message: "Please specify the type of employee",
        name: "addEmployeeType",
        choices: ["Manager", "Engineer", "Intern", "No other team members needed"]
    }]).then(function (userInput) {
        switch(userInput.addEmployeePrompt) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;

            default:
                htmlGenerator();
        }
    })
}

function addManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "managerOffice",
            message: "What is the manager's office number?"
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID,answers.managerEmail, answers.managerOffice);
        teamArray.push(manager);
        createTeam();
    });

}

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });

  }

  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });

}

function htmlGenerator () {
    console.log ("Team created!")

    fs.writeFileSync(outputPath, generateHTML(teamArray), "UTF-8")
}

createEmployee();

}

runApp();





// probably going to be doing an inquirer.prompt() here

// create an array called employees

// whenever a new employee's info is added, we can then create a new employee object and push it to the employees array.

// create a function called askEmployeeInfo()
// this function will prompt the user for the following information:
// name, id, email, and role
// depending on the role, we will prompt the user for more information. github (engineer), office number(manager), and school (intern)
// when all that information is collected then we can create a new employee object and push it to the employees array.
// after we push to the employees array, we can then ask the user if they want to add another employee.
// if they answer yes, we can call the askEmployeeInfo() function again.
// if they answer no, we can then call the makeHTML() function.

// when the user selects "I am done" then we can then loop through the employees array and print out the information for each employee into an html document.
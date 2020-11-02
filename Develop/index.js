//console.log("hello");

const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");



// array of questions for user
const promptUser = () =>
  inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "badge",
        message: "What badges do you want?"
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the project usage?"
    },

    {
        type: "input",
        name: "license",
        message: "What license would you like to use?"
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the names of the contributors?"
    },

    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },

    {
        type: "input",
        name: "badge",
        message: "What badges do you want?"
    },

    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
]);

// function to write README file
//function writeToFile(fileName, data) {
//}

promptUser()
  .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));

// function to initialize program
function init() {

}

// function call to initialize program
init();

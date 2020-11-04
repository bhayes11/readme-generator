//console.log("hello");

const fs = require("fs");
const path = require("path");
const { get } = require("http");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown");



// array of questions for user
const init = () =>
  inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
        default: "npm i"
    },

    {
        type: "input",
        name: "usage",
        message: "What is the project usage?"
    },

    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {
        type: "input",
        name: "contributing",
        message: "What are the names of the contributors?"
    },

    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
        default: "npm test"
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
]).then((data) => {
    console.log(data);
    //generate data for md
    const generatedData = generate(data);
    console.log(generatedData);

    //create the md file
    writeToFile('TEST.md', generatedData)
})

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(
        path.join(fileName),
        data
    );
}

init();
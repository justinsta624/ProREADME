// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: "input",
            name: "TitleofMyProject",
            message: "Write the title of the project",
        },
        {
            type: "input",
            name: "Description",
            message: "Can you briefly describe your project?"
        },
        {
            type: "input",
            name: "Installation",
            message: "Can you describe the process of installation for this project?",
        },
        {
            type: "input",
            name: "Usage",
            message: "Can you describe the purpose of usage for this project?"
        },
        {
            type: "input",
            name: "License",
            message: "Which license did you apply for this project?",
        },
        {
            type: "input",
            name: "Contributor",
            message: "Who is the contributor for this projects?"
        },
        {
            type: "input",
            name: "Tests",
            message: "Did you conduct the tests for this projects?"
        },
        {
            type: "input",
            name: "Questions",
            message: "Please enter the appropriate method, if you have any questions (e.g. Email)"
        },
        {
            type: "input",
            name: "GitHubUsername",
            message: "Please enter your GitHub username"
        },
        {
            type: "input",
            name: "Email",
            message: "Please enter your email address"
        }
    ]); 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

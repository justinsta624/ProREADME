// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// generateMarkdown function: populate the README.md pursuant to answer from terminal
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const ArrayQuestions = [
    {
        type: "input",
        name: "Title",
        message: "What is the -Title- of the challenge? : "
    },
    {
        type: "input",
        name: "Description",
        message: "Can you briefly -Describe- about the challenge? : "
    },
    {
        type: "input",
        name: "Installation",
        message: "Which library/package did you -Install- for the challenge? : "
    },
    {
        type: "input",
        name: "Usage",
        message: "What is the -Usage- of this challenge? : "
    },
    {
        type: "checkbox",
        name: "License",
        choices: ['MIT', 'Apache', 'GNU', 'BSD', 'BSU', 'Mozilla', 'EPL', 'etc.'],
        message: "Which -License- did you applied for the challenge? : "
    },
    {
        type: "input",
        name: "Contributor",
        message: "Who makes -Contribute- for this challenge? : "
    },
    {
        type: "input",
        name: "Tests",
        message: "Did you conduct the -Tests- for the challenge? : "
    },
    {
        type: "input",
        name: "Questions",
        message: "If I have any -Questions-, How can I reach out to you? : "
    },
    {
        type: "input",
        name: "GitHubUsername",
        message: "Please enter your GitHub username : "
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter your email address : "
    },
];

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your README.md has been successfully generated!")
    });
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer.prompt(ArrayQuestions)
      .then((data) => writeToFile('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
// Function call to initialize app 
  init();

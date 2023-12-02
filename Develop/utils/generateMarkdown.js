// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.Title} 👋</h1>
    
  ![badge](https://img.shields.io/badge/License-${data.License}-Magenta)<br />
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributor](#Contributor)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ## License
  ![badge](https://img.shields.io/badge/License-${data.License}-Purple)
  <br />
  This application is covered by the ${data.License} License. 
  
  ## Contributor
  ${data.Contributor}
  
  ## Tests
  ${data.Tests}
  
  ## Questions
  ${data.Questions}<br />
  <br />
  :octocat: Find me on GitHub: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})<br />
  <br />
  Email me with any questions: ${data.Email}<br /><br />
  
  _GitHub repository: https://github.com/justinsta624/ProREADME_
      `;
    }


    module.exports = generateMarkdown;

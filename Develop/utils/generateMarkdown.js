// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
  if (License !== 'none') {
    return '[![License](https://img.shields.io/badge/License-${License}-magenta)](#License)';
  } 
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
  if (License !== 'none') {
    return 'https://choosealicense.com/licenses/${License}';
  } 
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License) {
  if (License !== 'none') {
    return '## License [${License}](${renderLicenseLink(License)})';
  } 
  else {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1 align="center">${data.Title} 😆 😁 😉 😜 </h1>
    
  ![Contributor](https://img.shields.io/badge/Contributor-${data.Contributor}-purple)
  ![License](https://img.shields.io/badge/License-${data.License}-magenta)
  ![Installation](https://img.shields.io/badge/Installation-${data.Installation}-red)
  ![Email](https://img.shields.io/badge/Email-${data.Email}-green)

  ## Description
  ${data.Description}
  
  ## Table of Contents
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributor](#Contributor)
  [Tests](#Tests)
  [Questions](#Questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ## License
  ${data.License} License is used for README.md generating challenge  
  
  ## Contributor
  ${data.Contributor}
  
  ## Tests
  ${data.Tests}
  
  ## Questions
  ${data.Questions}<br />
  <br />
  Direct Link to my GitHub Repository: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})<br />
  <br />
  Direct Link to my Email: ${data.Email}<br /><br />
  
  _GitHub repository: https://github.com/justinsta624/ProREADME_
      `;
    }


    module.exports = generateMarkdown;

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
  <h1 align="center"> ⭐ ${data.Title} ⭐ </h1>
    
  ![Contributor](https://img.shields.io/badge/Contributor-${data.Contributor}-purple)
  ![Email](https://img.shields.io/badge/Email-${data.Email}-green)
  ![GitHubRepo](https://img.shields.io/badge/GitHubrepo-${data.GitHubUsername}-yellow)
  ![License](https://img.shields.io/badge/License-${data.License}-magenta)
  ![Installation](https://img.shields.io/badge/Installation-${data.Installation}-red)
 
  ## Description <br />
  ${data.Description}

  ## Table of Contents <br />
  - [Description](#Description) <br />
  - [Installation](#Installation) <br />
  - [Usage](#Usage) <br />
  - [License](#License) <br />
  - [Contributor](#Contributor) <br />
  - [Tests](#Tests) <br />
  - [Questions](#Questions) <br />

  ## Installation <br />
  ${data.Installation}
  
  ## Usage Information <br />
  ${data.Usage}

  ## License <br />
  ![License](https://img.shields.io/badge/License-${data.License}-magenta) is used for README.md generating challenge

  ## Contributor <br />
  ${data.Contributor}
  
  ## Test Instruction <br />
  ${data.Tests}
  
  ## Questions <br />
  ${data.Questions}<br />
  <br />
  Direct Link to my GitHub Repository: [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})<br />
  <br />
  Direct Link to my Email: ${data.Email}<br /><br />
  
  _GitHub repository: https://github.com/justinsta624/ProREADME_
      `;
    }


    module.exports = generateMarkdown;

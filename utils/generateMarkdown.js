// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `## License
    This project is licensed with ${license}.
    
    
    `;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `## License Link 
    //Where returns the actual link of the license.
    
    
    `;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //creating my markdown with template strings
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Table of Contents
  -[Description](#description)

  -[Installation](#installation)

  -[Usage](#usage)

  -[Contributing](contributing)

  -[Tests](#tests)

  -[License](#license)

  -[Questions](questions)

  //Link in the table of contents thats takes me to the corresponding section of the README 


  ## Usage
  
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  //give you a badge that goes to the top

  ## Questions
  ${data.GitHub}
  ${data.Email}

  



`;
}

module.exports = generateMarkdown;

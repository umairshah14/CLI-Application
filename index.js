const fs = require("fs");
const inquirer = require("inquirer");

// prompy series of questions for user
const promptUser = () =>
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter project name",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a short description of the project",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions",
      },
      {
        type: "input",
        name: "Instructions",
        message: "Enter instructions?",
      },
      {
        type: "input",
        name: "Usage",
        message: "Enter usage information",
      },
      {
        type: "list",
        name: "License",
        message: "Please select one of the following licenses (USE ARROW KEYS): ",
        choices: ["MIT", "ISC", "GNUPLv3"],
        filter(val){
            return val.toUpperCase()
        }
      },
      {
        type: "input",
        name: "Contribution",
        message: "Enter contribution guidelines",
      },
      {
        type: "input",
        name: "TestInstructions",
        message: "Enter instructions to test",
      },
      {
        type: "input",
        name: "githubQuestion",
        message: "Please enter your github URL",
      },
      {
        type: "input",
        name: "emailQuestion",
        message: "Please enter your email address",
      },
    ])
    .then((answers) => {
      const generateREADME = 
`# ${answers.name}:


## Description:
${answers.description.toUpperCase()}} 

## Table of Contents:
 * Description
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions

## Installation:
${answers.installation} 

## Instructions:
${answers.Instructions} 

## Usage:
${answers.Usage} 

## License:
This project is covered under the following license(s):
 * ${answers.License} 

## Contributors:
${answers.Contribution} 

## Tests:
${answers.TestInstructions} 

## Questions:
This is my github to see my projects ${answers.githubQuestion}

Feel free to contact me at ${answers.emailQuestion}`

    fs.writeFile(`README.md`, generateREADME, () =>{
        console.log("readme generated");
    })
    });

promptUser()
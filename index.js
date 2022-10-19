// TODO: Include packages needed for this application
//fs variable
const fs = require("fs");
//inquirer variable
const inquirer = require("inquirer");
//generate READme
const generateMarkdown = require("./utils/generateMarkdown");

//This is a function that takes you to the license when the license is clicked in the Readme
function getLicense(value) {
  if (value === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (value === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (value === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create an array of questions for user input
const questions = [
  {
    //Title question
    type: "input",
    name: "title",
    message: "What is the title of your Project?",
    //validate: validateInput,
  },
  {
    //Project Description question
    type: "input",
    name: "description",
    message: "Please describe your Project.",
    //validate: validateInput,
  },
  //Table of Contents
  {
    //Installation question
    type: "input",
    name: "installation",
    message:
      "Please explain how to install the software, or commands of the program.",
    //validate: validateInput,
  },
  {
    //Usage question
    type: "input",
    name: "usage",
    message: "Please describe how we can use this program/project.",
    //validate: validateInput,
  },
  {
    //License question
    type: "checkbox",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache License 2.0",
      "Boost Software License 1.0",
      "MIT License",
    ],
    //validate: validateInput,
  },
  {
    //Contributing question
    type: "input",
    name: "contributing",
    message: "How can users contribute to your project?",
    //validate: validateInput,
  },
  {
    //Tests question
    type: "input",
    name: "tests",
    message:
      "Please enter any testing instructions you would liek to provide for this project.",
    //validate: validateInput,
  },
  {
    //github username question
    type: "input",
    name: "userName",
    message: "What is your Github username?",
    //validate: validateInput,
  },
  {
    //email question
    type: "input",
    name: "email",
    message: "What is your Github email address that contributors may contact?",
    validate: function (value) {
      // this make sure that the email is valid
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Not a valid email address. Please enter a valid email address.";
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Readme.md has been succesfully created!");
  });
}

// TODO: Create a function to initialize app or the questions
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(JSON.stringify(data, null, " "));
    data.getLicense = getLicense(data.license);
    writeToFile("./sample/README.md", data);
  });
}

// Function call to initialize app
init();

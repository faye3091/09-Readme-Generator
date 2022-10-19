// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    const getBadgeArr = license.map((element) => {
      return `![alt text](https://img.shields.io/static/v1?label=licence&message=${encodeURIComponent(
        element
      )}&color=GREEN)`;
    });
    return getBadgeArr.join(" ");
  } else {
    return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "[Link to License](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[Link to License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[Link to License](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Apache 2.0") {
    return "[Link to License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost Software 1.0") {
    return "[Link to License](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "MIT") {
    return "[Link to License](https://opensource.org/licenses/MIT)";
  } else {
    return "[Link to License](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  license.forEach((element) => {
    licenseText += element + ": <br />";
    licenseText += renderLicenseLink(element) + "<br />";
    switch (element) {
      case "GNU AGPLv3":
        licenseText +=
          "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available \n";
        break;
      case "GNU GPLv3":
        licenseText +=
          "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. \n";
        break;
      case "GNU LGPLv3":
        licenseText +=
          "Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work \n";
        break;
      case "Mozilla":
        licenseText +=
          "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.\n";
        break;
      case "Apache License 2.0":
        licenseText +=
          "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n";
        break;
      case "MIT License":
        licenseText +=
          "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n";
        break;
      case "Boost Software License 1.0":
        licenseText +=
          "A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code. \n";
        break;
      default:
        licenseText += "";
    }
  });
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#license)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  Github Profile: [${data.userName}](https://github.com/${data.userName})
  <br />
  Reach me with additional questions at ${data.email}
  `;
}

module.exports = generateMarkdown;

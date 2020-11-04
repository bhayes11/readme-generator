// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description

${data.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License
![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)


## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

 [${data.username}](https:/github.com/${data.username}/)


${data.email}

`;
}

module.exports = generateMarkdown;

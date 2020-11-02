// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.badge}

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

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.github}
${data.email}

`;
}

module.exports = generateMarkdown;

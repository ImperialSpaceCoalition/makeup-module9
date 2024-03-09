// TODO: Include packages needed for this application
//See Line 20

// TODO: Create an array of questions for user input
// const questions = []; See Line 24

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {} See Line 74

// TODO: Create a function to initialize app
// function init() {} See line 81

// Function call to initialize app
// init(); See Line 90





// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('README.md successfully created!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownData = generateMarkdown(answers);
        writeToFile('README.md', markdownData);
    });
}

// Function call to initialize app
init();


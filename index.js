const Manager = require("./lib/manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/intern")
const inquirer = require('inquirer');
const path = require("path")
const fs = require('fs')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const render = require("./lib/htmlRenderer");


const students = [];

const firstQuestion = {
    type: "list",
    message: "Would you like to add a member or generate current team?",
    name: "Add",
    choices: ["Add Member", "Generate Team"],
  };
  const questionsYourRole = {
    type: "list",
    message: "What member you want to add?",
    name: "role",
    choices: ["Intern", "Engineer", "Manager"],
  };
  
  const fileNameQuestion = {
    type: "input",
    message: "Please enter valid file name",
    name: "fileName",
  };




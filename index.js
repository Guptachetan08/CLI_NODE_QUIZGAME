#!node
// #! is shebang
//shebang is used to tell th OS how to execute the code

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// chalk is used to color the output text in command line
//inquirer used to collext user input

let playerName;

const sleep = (ms=2000) => new Promise((r) => setTimeout(r,ms));

async function welcome(){

    const wel = `Welcome`;
    figlet(wel,(err,data)=>{
        console.log(chalk.bold.green(data));
    })

    await sleep();

    console.log(chalk.bgCyan('Who wants to Be a Javascript Pro? \n'));

    console.log(`
        ${chalk.bgBlue('HOW TO PLAY')}
        I am a process on your computer.
        if you get any question wrong I will be ${chalk.bgRed('killed')}
        So get all the questions right...
    `);

}

console.clear();

await welcome();
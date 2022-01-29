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

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is Your Name?',
        default(){
            return 'player';
        }
    });

    playerName = answers.player_name;
}


function winner(){
    console.clear();
    const msg = `Congarts, ${playerName}, You're now a pro!!😎😎`;
    figlet(msg,(err,data) => {
        console.log(gradient.pastel.multiline(data));
    })
}

async function question1(){
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Javascript was created in 10 days then released on\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24rd, 1995',
            'Dec 4th, 1995',
            'Dec 17th, 1996',
        ],
    });

    return handleAnswer(answers.question_1 == 'Dec 4th, 1995');
}

async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
      choices: ['4', '"4"', '"1111"', '69420'],
    });
    return handleAnswer(answers.question_2 === '"1111"');
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
      choices: ['0', '🐏', '🐍', 'undefined'],
    });
  
    return handleAnswer(answers.question_3 === 'undefined');
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which of the following is NOT a primitive type?\n',
      choices: [
        'boolean',
        'number',
        'null',
        'object', // Correct
      ],
    });
    return handleAnswer(answers.question_4 === 'object');
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'JS is a high-level single-threaded, garbage-collected,\n' +
        'interpreted(or just-in-time compiled), prototype-based,\n' +
        'multi-paradigm, dynamic language with a ____ event loop\n',
      choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
    });
  
    return handleAnswer(answers.question_5 === 'non-blocking');
  }
  

async function handleAnswer(isCorrect){
    const spinner = createSpinner('Checking answer...\n').start();
    await sleep();

    if(isCorrect){
        spinner.success({ text: `💯💯Nice work ${playerName}\n`});
    }
    else{
        spinner.error({ text: `💀💀💀Game over, you lose ${playerName}! \n`});
        process.exit(1);
    }
}


console.clear();

await welcome();
await askName();

await question1();
await question2();
await question3();
await question4();
await question5();

winner();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = {
  name:'',
  activity:'',
  meal:'',
  thing:''
};

rl.question("What' your name? Nicknames are also acceptable :)", (answer) => {
  answers.name = answer;
  rl.question("What's an activity you like doing?", (answer) => {
    answers.activity = answer;
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer) => {
      answers.meal = answer;
      rl.question("What's your favourite thing to eat for that meal?*/", (answer) => {
        answers.thing = answer;
        console.log('');
        console.log(`${answers.name} likes ${answers.activity}, and do ${answers.thing} when eating ${answers.meal}`);
        rl.close();
      });
    });
  });
});
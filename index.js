
const chalk = require('chalk') //Chalk is a dependency used for styling

console.log(chalk.yellow.bold("Hello fren, Here's your Bollywood Quiz "));

var readlineSync = require('readline-sync');// readlineSync is dependency used to ask users questions
var score = 0;

//Welcome the users
function welcome (){
var userName = readlineSync.question('Enter your name? ');
console.log("Hey," + userName + " Let's see if you're a bollywood buff")
console.log(chalk.grey('--------------------------------------------------'))
}

welcome()

//Play function
function play(question, answer) {

  var userAns = readlineSync.question(question);

  if(userAns.toUpperCase() === answer.toUpperCase() ) //toUppercase -> lower to caps 

  {
    console.log(chalk.green('Correct'));
    score++;
    console.log(chalk.green(score));

  } else {
    console.log(chalk.red('Incorrect'));
    score--;
    console.log(chalk.red(score));
  }
  console.log(chalk.cyan('current score is: ' + score))
  console.log(chalk.grey('--------------------------------------------------'))
}

//Question and answers using array 

var questions = [{
  question: "Full form of YJHD: " , answer: "Yeh jawani hai deewani" 
  }, {question:"Clut classic movie with Thakur in it: ", answer: "Sholay"}, {question: "What is jungle books main character's name: ", answer:"Mowgli"}, {question:"Recent hindi movie which is also a populor indoor game: ", answer: "Ludo"
}, {question: "Aisha Banerjee is character from which movie: ",answer:"Wake up sid"}];


//for loop

function game() 
{
  for (var i=0; i<questions.length; i++) 
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

game();

//Highest score by users 
var highScores=[
  {
    name:"Alooo",  score:4,
  },
  {
    name:"Jeera", score:3,
  }
]

//Display the score
function showScores() 
{
  console.log("Your score is: ", score);
 
 console.log(chalk.grey('--------------------------------------------------'));

 (console.log(chalk.cyan.bold.underline("Top scorer's are:  ")))

  highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();

 (console.log(chalk.yellow.bold("Take a screenshot of your score and share it to get your scores updated.!!! Sayonara")));

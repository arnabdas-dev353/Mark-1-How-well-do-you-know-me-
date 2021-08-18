var readlineSync = require('readline-sync');
var score = 0;

// HIGH-SCORE RECORD
var highScore = [
{
  name : "Arnab",
  score : 6
},{
  name : "Akash",
  score : 5
},{
  name : "Amy",
  score : 5
}];

// QUESTIONS RECORD
var question = [
  {
    question : "\nQ1. What is my First Name?\n",
    answer : "ARNAB"
  },{
     question : "\nQ2. What is my college name? (The First name)\n",
    answer : "SATHYABAMA"
  },{
     question : "\nQ3. Where do I live?\n",
    answer : "ASANSOL"
  },{
     question : "\nQ4. What is my Favorite color?\n",
    answer : "BLUE"
  },{
     question : "\nQ5. What is my favorite Dish?\n",
    answer : "BIRIYANI"
  },{
     question : "\nQ6. What is my favorite programming language?\n",
    answer : "JAVA"
  }];

// FUNCTION WELCOME
function welcome() {
  var userName = readlineSync.question("May I Know Your Name Please? \n");

  console.log("Hello! "+userName+"!, Welcome to QUIZ-ON-MARVEL.\n");

  console.log("HERE ARE SOME RULES : \n1. IF THERE IS ANY MISTAKE IN YOUR SPELLING, YOU WILL LOOSE SCORE. \n2. USE ONLY LETTERS OR WORDS. \n3. AND SORRY FOR THESE RULES, THIS IS MANDATORY AS THE CODE IS VERY SENSITIVE. \n4. ENJOY YOUR GAME! : ");

  console.log("----------------------------------------------");
}

// FUNCTION PLAY
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right! 🥳🤩\n");
    score++;
  } else {
    console.log("You're wrong! 😟\n");
    score--;
  }
  console.log("\nYour Current Score --> "+score);
}


//  FUNCTION GAME
function game() {
for (var i=0; i<question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
}

// FUNCTION SHOW SCORES
function showScores() {
  console.log("\nYAY! You SCORED: ", score+" out of 6 🤩🤩🤩🤩🤩🤩🤩\n");
  console.log("\nCheck out the HIGH SCORES. \nIf you want to be there send me the screenshot of the score, I'll update.\n");
  highScore.map(score => console.log(score.name, " : ", score.score))
}

// FUNCTION CALLING
welcome();
game();
showScores();


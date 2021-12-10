const chalk = require('chalk');
let score = 0 ;
let winner = {name: "Ankit", score: "2"};
let questions = [{
  q:"1. What Do I like?",
  a:" a: Bunjee Jumping",
  b:" b: Sky Diving",
  c:" c: Deep Sea Diving",
  d:" d: Hiking",
 ans: "c",
 
},{
  q:"2. Which is my fav car?",
  a:" a: Lambo",
  b:" b:  Porche",
  c:" c: Aston martin",
  d:" d: Bugati",
 ans: "b",
 
},{
  q:"3. Which is my fav movie?",
  a:" a: The Shawshank Redemption",
  b:" b: The Ring",
  c:" c: Luca",
  d:" d: Gambit",
 ans: "b",
 
},{
  q:"4. Idol I preach the most is....",
  a:" a: Bill Gates",
  b:" b: Jeff Bezos",
  c:" c: Sundar Pichai",
  d:" d: Elon Musk",
 ans: "d",
 
},{
  q:"5. My Favorite sports is",
  a:" a: BasketBall",
  b:" b: Volley ball",
  c:" c: Cricket",
  d:" d: Swimming",
 ans: "a",
 
},{
  q:"6. which is my fav TV Show?",
  a:" a: How I met your Mother",
  b:" b: Vincenzo",
  c:" c: FRIENDS",
  d:" d: Man in the High Castle",
 ans: "a",
 
},{
  q:"7. which is my fav song?",
  a:" a: Buttercup",
  b:" b:  StarBoy",
  c:" c: Levitating ",
  d:" d: Where are you",
 ans: "b",
 
},
];

takeName();


function takeName(){
  let userName = prompt("HI whats your name?");
  while (userName == ""){
    console.log(chalk.cyan.bold(`Please, Enter your Name To Play`));
    takeName();
  } 
  console.log(chalk.yellow.bold(`Welcome to my quiz ${userName}\n`));
      console.log(chalk.blue.bold('RULES FOR THE GAME\n'))
      console.log('# Each qustion has 2 right answers , you need to guess only 1 correctly')
      console.log('To get add 1 point and wrong answer wil take 1 point from score.\n')
      console.log(chalk.cyan.bold('Good Luck!!\n'))
  for(i=0; i<questions.length; i++){
    console.log(chalk.red(`Q${questions[i].q}`));
    console.log(questions[i].a);
    console.log(questions[i].b);
    console.log(questions[i].c);
    console.log(questions[i].d);
    `\n`

    let answer = prompt(`enter options`);



    if(questions[i].ans == answer.toLowerCase() ) {
      score++;
      console.log(` \nCorrect answer`);
    }else{
      score--;
      console.log(` \nWrong answer `);

    };

   console.log(chalk.blue.bold(`Right Answers Were ${questions[i].ans}  \n`));
    console.log(chalk.cyan.bold(`your score is ${score}\n` ));

  };



  scoreTable();
    function scoreTable(){
   if(score > winner.score){
     console.log(`\nCongratulations! ${userName}. your score is ${score}\nNow! you are the top player of the My QUIZ\n
     Send me screenshot and ill update your name`)
   }else{
    console.log(`\nBetter Luck Next Time ${userName} !\nyour Score is ${score} \nHighest score in Quiz is ${winner.score} by ${winner.name} \nHave a great day!`)
    }
  }


};
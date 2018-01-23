/////////////////
//Coding Challenge
/*
lets build a fun quiz game in the console

1. Build a function constructor called Question to describe
a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one
(choose an adequate data structure here, array, object, etc.)
c) correct answer(I would use a number for this)

2. create a couple of questions using the constructor

3. store them all inside an array

4. select one random question and log it on the console, together with
the possible answers (each question should have a number)(Hint: write a method
for the question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user
should input the number of the correct answer such as you displayed it on task 4

6. Check if the answer is correct and print to the console whether the answer is correct
or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with the other
programmers code(Hint: we learned a special technique to do exactly that).
*/

//function constructor called Question to describe question, answers and correct answers
(function() {

var Question = function (question, answer, correctAnswer) {
  this.question = question;
  this.answer = answer;
  this.correctAnswer = correctAnswer;
}

var totalScore = 0;

var contGame = function() {

console.log("__________________________________________");
console.log("------------------------------------------");
var n2 = Math.round(Math.random() * 3);
questions[n2].displayQuestion();
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n2].checkAnswer(answer);

}


Question.prototype.displayQuestion = function() {
  console.log(this.question);
  for (var i = 0; i < this.answer.length; i++) {
    console.log((i + 1) +': '+ this.answer[i]);

  }};

Question.prototype.checkAnswer = function(ans) {

if (ans === this.correctAnswer) {

    console.log("Thats Right!");
    totalScore = totalScore + 1;
    console.log("Your Total Score is: " + totalScore);
    contGame();


} else if (ans === "exit") {

    console.log("Game Exited Successfully!");

} else {

    console.log("Wrong Answer Bitch!");
    console.log("Your Total Score is: " + totalScore);

}


}

//created a couple of questions using the constructor

var question1 = new Question("How many states are there in USA?", [42, 52, 43, 53], 2);
var question2 = new Question("Who gifted the statue of Liberty?", ['England', 'France', 'Germany', 'Canada'], 2);
var question3 = new Question("Who discovered the United States?", ['Isaac Newton', 'Abraham Lincoln', 'Nikola Tesla', 'Christopher Columbus'], 4);
var question4 = new Question("What was the name of the ship that discovered USA?", ['Mayflower', 'Flowernational', 'Rose Petel', 'Nana Patekar'], 1);

//stored them all inside an array

var questions = [question1, question2, question3, question4];

//select one random question and log it on the console, together with the possible answer
var n = Math.round(Math.random() * 3);

questions[n].displayQuestion();
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);


/*var contGame = function() {
var n2 = Math.round(Math.random() * 3)
questions[n2].displayQuestion();
var answer = parseInt(prompt('Please select the correct answer.'));
questions[n].checkAnswer(answer);
console.log("__________________________________________");
console.log("------------------------------------------");
}
*/
})();





/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

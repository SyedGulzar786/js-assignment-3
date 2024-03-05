// // q1
// var city = prompt("Enter your city");
// if (city == "karachi"){
//     document.write("<h1>welcome to city of lights</h1>")
// }
// else { document.write ("<h1>Andhera hi adhera hai..!</h1>") }

// // q2
// var gender = prompt("Enter your gender");
// if(gender == "male"){
//     document.write("<h1>Good Morning Sir.</h1>")
// }
// else if (gender == "female"){
//     document.write("<h1>Good Morning ma'am.</h1>")
// }
// else {
//     document.write("<h1>you are robot.</h1>");
// }

// // q3
// var trafficSignal = prompt("Show the traffic signal");
//  if (trafficSignal == "red"){
//     document.write("<h1>Must Stop</h1>")
//  }
//  else if (trafficSignal == "yellow" ){
//     document.write("<h1>Ready to move</h1>")
//  }
//  else if (trafficSignal == "green" ){
//     document.write("<h1>Move now</h1>")
//  }
//  else {
//     document.write("404 Error Not Found")
//  }
// // q4
// var fuel = +prompt("how much your fuel");

// if (fuel <= 20) {
//     document.write("<h1>refill</h1>");
// }
// else if (fuel > 20){
//     document.write("<h1>no need to refill</h1>")
// }
// else {
//     document.write("<h1>bhaaag ja</h1>")
// }
// // q5
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (++b === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (c < 14){
// alert("condition 3 is true");
// }
// if(++c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" > "cat"){
// alert("car is greater than cat");
// }

// var english = +prompt("marks of english");
// var math = +prompt("marks of math");
// var urdu = +prompt("marks of urdu");
// var sci = +prompt("marks of sci");

// var totalMarks = 300;
// var marksObtained = english + math + urdu + sci;
// var per = marksObtained / totalMarks * 100
// var grade = "A one", Grade1 = "A", Grade2 = "B", Grade3 = "fail";

// if(per > 100) {
//     document.write("not found")
// }

// else if (per >= 80){
//     document.write("<h1>Total marks:</h1>" + "<h2>" + totalMarks + "</h2>"+ "<br>");
//     document.write("<h1>marksobtained:</h1>" + marksObtained + "<br>")
//     document.write("<h1>percentage:</h1>" + per +"%"+ "<br>")
//     document.write("<h1>Grade:</h1>" + grade + "<br>")
//     document.write("<h1>Remarks:</h1>" + " exellent " + "<br>")
// }

// else if (per >= 70){
//     document.write("<h1>Total marks:</h1>" + "<h2>" + totalMarks + "</h2>"+ "<br>");
//     document.write("<h1>marksobtained:</h1>" + marksObtained + "<br>")
//     document.write("<h1>percentage:</h1>" + per +"%"+ "<br>")
//     document.write("<h1>Grade:</h1>" + Grade1 + "<br>")
//     document.write("<h1>Remarks:</h1>" + " good " + "<br>")
// }
// else if (per >= 60){
//     document.write("<h1>Total marks:</h1>" + "<h2>" + totalMarks + "</h2>"+ "<br>");
//     document.write("<h1>marksobtained:</h1>" + marksObtained + "<br>")
//     document.write("<h1>percentage:</h1>" + per +"%"+ "<br>")
//     document.write("<h1>Grade:</h1>" + Grade2 + "<br>")
//     document.write("<h1>Remarks:</h1>" + "need to improve" + "<br>")
// }
// else if (per < 60){
//     document.write("<h1>Total marks:</h1>" + "<h2>" + totalMarks + "</h2>"+ "<br>");
//     document.write("<h1>marksobtained:</h1>" + marksObtained + "<br>")
//     document.write("<h1>percentage:</h1>" + per +"%"+ "<br>")
//     document.write("<h1>Grade:</h1>" + Grade3 + "<br>")
//     document.write("<h1>Remarks:</h1>" + " fail " + "<br>")
// }
// else {
//     document.write("<h1>kalti maar jni</h1>")
// }

// q7
// var secret = 6;
// var guess = +prompt("Guess the hidden number from 1-10");
 
// if (guess === secret){
//     document.write("<h1>Bingo! You have guess the correct answer</h1>")
// } 

// else if (guess === ++secret){
//     document.write("<h1>Close enough</h1>")
// }

// else {
//     document.write("<h1>ERROR! Guess the hidden number from 1-10</h1>")
// }

// q8
// let number = +prompt("Enter a number:");

// if (number % 3 === 0) {
//     document.write("<h1>The number is divisible by 3</h1>");
// }
//  else {
//     document.write("<h1>The number is not divisible by 3</h1>");
// }

// q9
// let input = +prompt("give any number");

// if(input % 2 === 0){
//     document.write("<h1>The number is an even number</h1>");
// }
// else {
//     document.write("<h1>The number is an odd number</h1>");   
// }
// q10
// let temp = +prompt("enter the temperature in number");

//  if(temp > 50){
//     document.write("<h1>enter the correct response.</h1>")
// }

// else if(temp >= 40){
//     document.write("<h1>it's too hot out side.</h1>")
// }
// else if(temp >= 30){
//     document.write("<h1>The Weather today is Normal.</h1>")
// }
// else if (temp >= 20){
//     document.write("<h1>today's weather is cool.</h1>")
// }
// else if (temp >= 10){
//     document.write("<h1>OMG! Today’s weather is so Cool.</h1>")
// }
// else if (temp <= 10){
//     document.write("<h1>please cover your self, its too cold out side.</h1>")
// }
// else {
//     document.write("<h1>only temperature value is accepted.</h1>")
// }
// q11
// let num1 = +prompt("enter the first number");
// let num2 = +prompt("enter the second number");

// let opt = prompt("enter the operator");

// if(opt == "+"){
//     document.write("<h1>" + (num1 + num2) + "</h1>")
// }
// else if(opt == "-"){
//     document.write("<h1>" + (num1 - num2) + "</h1>")   
// }
// else if(opt == "*"){
//     document.write("<h1>" + (num1 * num2) + "</h1>")
// }
// else if(opt == "/"){
//     document.write("<h1>" + (num1 / num2) + "</h1>")
// }
// else if(opt == "%"){
//     document.write("<h1>" + (num1 % num2) + "</h1>")
// }
//  else {
//     document.write("invalid");
//  }
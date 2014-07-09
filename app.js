
var prompt = require('sync-prompt').prompt;



var first = prompt ('what is your first name?');
var last =  prompt('what is your last name?');
var full = first + ' ' + last;
console.log('your full name is', full);

var color = prompt('what is your favorite color?');
console.log('your favorite color is' +color + '_');

var age = prompt("what is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

console.log("your dog's age is", age);
var dogyear = (age*7);
console.log("your dog's age in human years is", dogyear);

var drinkingAge = prompt('how old are you?');
drinkingAge = parseInt (drinkingAge)

if (drinkingAge >= 21){
  console.log ('you can drink!');
}else{
 console.log ('you cannot drink');
}
var unit = prompt('f or c?');
var temp = prompt('what is the temp?');
if (unit === 'f'){
  var tempC = (temp -32)*5/9;
  console.log('the temperature is', temp,' in f and', tempC,' in c');
}else{
  var tempF = (temp*9/5 +32);
  console.log('the temperature is', temp,' in c and', tempF,' in f');
}


console.log("let's figure out your BMI");
var height = prompt('How tall are you, IN?');
hieght = parseInt(height);
var weight = prompt('How much do you weigh, LBS?');
weight = parseInt(weight);
var bmi = (weight/(height*height))*703;
console.log('your bmi is ->', bmi.toFixed(1));


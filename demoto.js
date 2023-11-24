
var val = "Hello World";
let hwRegex = /hello/
let newVal = hwRegex.test(val) // returns a boolean value accordingly
console.log(newVal)// this returns 

const nyObj = {
    a : 1,
    c : 2,
}
var hasIt = "name" in nyObj
console.log(hasIt) // the in operator also returns a boolean value/false
const number = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = number.filter(function(num){
    return num % 2 === 0;
})
console.log("odd numbers in the array;",oddNumbers)
const  words = [1,2,3,4,5,6,7,8,9,0]
const someEvenNums = words.some(function (num){
    return num % 2 === 0
})
console.log(someEvenNums)
// a js program that checks if y is +,- or 0 and displays an appropraite message
let x = [1,2,3,4,-4,0,7]
const checkNum = y.filter(function(num){
    return num%2 === 0;
})
console.log(checkNum)
const y = parseFloat(prompt("Enter a number:"));



    if (y > 0){
       console.log ("Positive integer")
    }
    else if (y = 0){
      console.log("Zero") 
    }
    else{
       console.log("Negative integer") 
    }
    // use the some and filter keywords with arrow functions
// filter 
const myObj = [1,3,5,7,9]
const oddNumberss = myObj.filter(num => num % 2 === 1)
console.log(oddNumberss)
// some returns an array of odd numbers

const checkEvenNum = myObj.some(num => num % 2 === 0)
console.log("there are  such numbers;",checkEvenNum)
// returns true
var result = 7 * (true + true);// this will return 14 bcz true = 1
console.log(result)
// recursion in js 
function countDown(number){
    console.log(number)
    var newNum = number - 1
    if (newNum > 0){
        countDown(newNum)
    }
}
console.log(countDown(7))
function countUp (number){
    if (number <= 10){ // condition
    console.log(number)
    countUp(number + 1) // recurse
    } 
}
countUp(1);
function countDownn(num){
    if(num > 1){  //condition understanding how the code should work
        console.log(num);
        countUp(num-1);// recurse
    }
    
}
countDown(10)
// arrays 
const myArray = [1,2,3,4,5,6,7,8,9]
var fillled = myArray.fill(0)
console.log(fillled)
let yas = [1,2,3,4,5,6,7,8,9,0]
var newzVal = yas.filter(num => num % 2 === 0);
console.log(newzVal);
var maxNum = Math.min(...yas);
console.log(maxNum)
// recap on recursive function ; this is a function that recalls itself with a condition and recursive or (base code)
// example below
function countUpp(val){
    if (val > 10){
        console.log(val);
        countUpp(val + 1)
    }
}
countUpp(1);

function checkMatrix(MatrixA,MatrixB){
    if ( MatrixA.length !== MatrixB.length || MatrixA.length[0] !== MatrixB.length[0]){
        return "This cannot work due to uncorresponding matrix properties";
    }
}
// learnt how to use the ternary operator instead of if else or switch
const grade = 45
const result = (grade >80) ? "D1" 
 : (grade > 60 && grade < 80) ? "Pass" : "Fail"
console.log(result)
// Added more knowledge on ternary operator and solved problems without chatGpt lol
function checkEqual(a, b) {
    return a > b || b > a ? "Not Equal" : "Equal"
  
  }
  
  checkEqual(1, 2);
// using some op and filter 
// filter function 
const newArrayy = [1,2,3,4,5,6,7,8,9]
const newVall = newArrayy.filter(num => num % 2 === 1)
console.log(newVal)
// some 
const myArrayy = [1,2,3,4,5,6,7,8,9]
const otherVall = myArrayy.some(num => num < 1)
console.log(otherVall)
// i am adding practice on regex or regular expressions lol (test methode)
var herString = "The bugs in my code arent in my bed ";
var herRegex = /[aeiou]/;
var result = herRegex.test(herString)
console.log(result)
// regex but match keyword
// as we saw before the test method or function returns booleans while the match
// now we use the match method
// this one returns an array of matched strings or null if no matches are found
let wordss = "I hate Fox , i wish fox were dead, because fox at my friend lol"
let myRegex = /fox/ig;
let answer = wordss.match(myRegex)
console.log(answer)
// a hyphen can be used to specify range of scope to be matched
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line of code
let result = quoteSample.match(alphabetRegex); // Change this line
// using the caret to exclude what to be matched(negated characters)
let quoteSamplee = "3 blind mice.";
let myRegexz = /[^aeiuo^0-9]/ig; // Change this line
let result =quoteSamplee.match(myRegexz); // Change this line
console.log(result)
// simple calculator using switch case statement
// 4 variables two nums one for the operand and
//one for the variable of the outcome 
//it should be done in five minutes
const numeroUno = 2;
const numeroDos = 7;
let answerr;
 var operand = prompt("-");
switch (operand){
case "+": 
answerr = numeroDos + numeroUno;
break;
case "-" :
answerr = numeroDos - numeroUno;
break;
case "/" : 
answerr = numeroDos / numeroUno;
break;
case "*":
answerr = numeroDos * numeroUno;
break;
case "%":
answerr = numeroDos % numeroUno;
default : 
answerr = "Not Aplicable";
}
console.log(`The result of Your Operation is  ${answerr}`)
// creating Write a program that takes a number (1-7) as input and 
// displays the corresponding day of the week (e.g., 1 for "Sunday," 2 for "Monday," etc.).

const dayNum  = (6); 
let dayName;
switch(dayNum){
case 1 :
dayName = "Sunday";
break;
case 2 : 
dayName = "Monday";
break;
case 3 :
dayName = "Tuesday";
break;
case 4 : 
dayName = "Wednesday";
break;
case 5 :
dayName = "Thursday";
break;
case 6 :
dayName = "Friday";
break;
case 7:
dayName = "Saturday";
break;
default:
dayName = "Not Allowed";
}
console.log(`The day of the week is ${dayName}`);
//Simulate a traffic light with three states (red, yellow, green) and print the
// color of the light when a number (1-3) is input.
// we will need two variable colorLight and numero;
var numero = 1;
var resultant ;
switch(numero){
case 1 :
resultant = "Red";
break;
case 2 :
resultant = "Yellow";
break;
case 3 :
resultant = "Green";
break;
default :
resultant = "Not Allowed Here";

}
console.log(`The color is ${resultant}`);

console.log(`The color is ${resultant}`);
// adding a method that converts a string to array
// it is the Array.from method 
myString = "I dont like money";
myArray = Array.from(myString);
console.log(myArray)// this will give out an arrayof all the values be it space comma etc
// now i can also make the opposite of the above and make an array a string lol
// this can be achieved using the .join method
var herArray = [1,2,3,4,5,6,7,8,9,0]
var itsString = herArray.join(_) // here i use underscore to separate the characters
// convert string into Number
var str = "000707";
const num = parseInt(str);
console.log(num)// this will output the number 707
// the typeof method returns the type of data of a js variable
// the typeof operator is used to determinea the data type of a certain object
const myObjj = {name : "brian" , locational : "kicukiro"};
console.log(typeof myObjj); //  this will return object 
// we can use Math.max and Math.min to know the biggest num and smallest in an array respectively
const itsArray = [1,2,3,4,5,6,7,8,8,9];
const maxNom = Math.max(...itsArray);
const minNom = Math.min(...itsArray);
console.log("the numbers are", maxNom + minNom);
// do i remember to write the simple calculator that operates between two
// two numbers lets see
// two num vars must return output of operations

const num1 = 4;
const num2 = 6;
var operand = prompt("-");
var outPut;
switch (operand){
    case "+" : 
    outPut = num1 + num2;
    break;
    case "-" :
    outPut = num2 - num1
    break;
    case "/" :
    outPut = num2/num1
    break;
    case "*" :
    outPut = num2 * num1
    break;
    default:
    outPut = "Not included here bro"
}
console.log(outPut);

// recaps on arrow functions
const greet = (/*param*/) =>{
    console.log("Hello World");
}
const addiTion = (a,b,c) => {
    return (a + b + c)
}
console.log((addiTion(1,2,3)))
greet();
//Stand in line courtesy of freecode camp this code demonstates queues in js 
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item)
  
  return arr.shift();
  
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
// i shudwrite an equivalent of an arrow funct of this one 
function square(x) {
  return x * x;
}
// param = x name of function = square
const square = (x)=> {
    return x * x;
}
// learning how to use the map method 
// learning how to use the map method in js so basically its used to like add or introduce a particular operation be it multiplication or a certain function into an array
// for example im going to create a function that carries out addition of the value 10 
function addingTen (val){
    return val + 10;
}
console.log(addingTen(2))
// after this i will create an array and i will use the map to add ten to each meamber of the array
const theirArray = [1,2,3,4,5,6,7,89,0]
const theirNewArray = theirArray.map(addingTen)
console.log(theirNewArray)
//im going to create a constructor function in js and name it car and use diff brands
// to practice and how to access its diff properties to be used in a new object
function Car (brand,horsePower){
    this.brand = brand;
    this.horsePower = horsePower;
    this.carInfo = () =>{
        console.log(`This car is a ${this.brand} and has ${this.horsePower} of power`);// here i use an arrow function because i love them lol
    }
}
// to acces the diff properties to create multiple instances of objects we can use the new keyword
const car1 = new Car ('Corvette',10000);
const car2 = new Car ('Benz',12000);
console.log(car2.brand)
car2.carInfo();
// revision on a for loop
// it is used to create a certain repeating block of code 
// it can also be used in an array like below

const hisArray = []
for(let i = 0 ; i < 10 ; i++){
    hisArray.push(i)
}
console.log(hisArray)
// can i use recursion to create a countdown function
function countDown(numero){
    if(numero > 0){
        console.log(numero);
        countDown(numero - 1);
    }
 }
 countDown(10);
 // another for loop
 for (let i = 0 ; i < 5; i++){
    console.log(i);
}
// the parse int helps one convert a string to an integer but also used
// to create a base of a number out of a string 
function converToInteger (str){
    return parseInt(str,2)
}
const newBase = converToInteger("100111",2)
console.log(newBase)
// create a temperature conversion algorithm with a prompt box 

const convertToCel = (fahr) =>{
    return  (fahr-32) *5/9
}
convertToCel(19);
const userInput = prompt("Enter temperature in fahrenheit"); // this declares the uI variable to constant and initializes it to prompt "xxx"
if (userInput !== null){// if userInput is not null which means  intentional abscence this only runs when user doesnt cancel
    const fahrenheit = parseFloat(userInput); // declare value fahrenheit to constant and set the 
    if (!isNaN (fahrenheit)){ // check if fahr is a number using isNaN 
        const celsius = convertToCel(fahrenheit); // initialize celsius to constant and convert it to fahr as per initail function
       alert(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius.`);// this pop up message shows when the function above is met
    }
    else {
        alert("Invalid input plz enter a valid number") // if the code in the above function is not meant due to it not being a number 
    }
    
}else{
    alert("user cancelled the inut") // this prompts when the user canceled the prompt
}

// typos debugging;
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
// the reduce can be used to find sums in an array through a series of operations
const values = [12, 45, 32, 7, 98, 53];
const max = values.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), values[0]);
console.log(max); // Output: 98
const itsVals = [12, 45, 32, 7, 98, 53]
const maxNumber = Math.max(...itsVals)
console.log(maxNumber)// output : 98
// same output
// recurring function in js count up with multiplication

function countUp(val){ // function named count up that does what it says with val param
    if (val <=10){ // condition that governs the code and instructs when to stop
        console.log(val); // action (pushing in value of val which is set to one)
        countUp (val * 2) // base code or recursive 
    }
    
}
countUp(1)
//the in operator is used to check if a certain
//property is present in an object
const ourObj = {
    a:1,
    b:2,
    c:3,
    d:4
}
const check = "d" in ourObj
console.log(check)
// algorithm that multiplies two arrays
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for (let i = 0 ; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      product *= arr[i][j]
    }
  }
    // Only change code above this line
    return product
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  // a constructor function about computers
function Computer(processor,gpu,refreshrate){
    this.gpu = gpu;
    this.processor = processor;
    this.refreshrate = refreshrate;
   console.log(`I have a crush on the new ryzen ${this.processor}`)
}
var NelComp = new Computer("Ryzen5","1300series",500) // object instance created
console.log(NelComp)
// an algorithm that converts time in 24 hour format to 12 hours format
function convertTo24Hourf(time12hours){
    const [time,modifier] = time12hours.split(' ');
    let [hours,minutes] = time.split(':');
    console.log(time,modifier,hours,minutes)
    if (hours === '12'){
        hours = '00';
    }
    if (modifier === 'PM'){
        hours = String(Number(hours) + 12)
    }
    return `${hours}:${minutes}`;
}
const time24 = convertTo24Hourf('03:45 AM')
console.log(time24) // to be revised again 
// function of a regex
function regularExp(){
 
Let regex = /aeiou/ gi
return regex;

}
var string = "hello wierd butt"
var truth = regularExp()
var answer =truth.test(string)
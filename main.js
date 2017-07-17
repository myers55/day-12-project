// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2) {

  var maxNum = num2;

  if (num1 > maxNum) {
    maxNum = num1;
  }

  return maxNum;

}




// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(nUm1, nUm2, nUm3){
      if (nUm1 > nUm2 && nUm1 > nUm3){
        return nUm1;
      }
      else if (nUm2 > nUm1 && nUm2> nUm3) {
        return nUm2;
      }
      else {
        return nUm3;
      }
}

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){

  var letter = false;

  if(char == 'a' || char == 'e' || char == "i" || char == "o" || char == "u")
    letter = true;

  return letter;

}
// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a, b){
  return a + b;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(a, b, c){
  return (a + b + c)/ 3;
}

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(text){
  return text.length

}

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
 function greaterThan (numOne, numTwo){
   if (numOne > numTwo){
     return false;
   }else if (numOne < numTwo){
     return true;
    }
 }

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  return "Hello," + " " + name + "!";
  }


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(a, b, c, d){
  return "jack and jill went up the" + "" + a + "" + "to catch a pail of" + "" +
  b + "" + "jack fell down and broke his" + "" + c + "" + "jill came" + "" + d +
  "" + "after."
}

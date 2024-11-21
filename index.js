
// 398 / 5 000
// Шаг 4. JavaScript имеет семь примитивных типов данных, одним из которых является String. В JavaScript строка представляет собой последовательность символов и может быть заключена в одинарные (') или двойные (") кавычки. Обратите внимание, что строки являются неизменяемыми, что означает, что после создания они не могут быть изменены. Переменной по-прежнему можно присвоить другое значение. Измените строку "Hello", чтобы использовать одинарные кавычки.

// let character = 'Hello';

// -----------------------------------------------------------------

// Консоль позволяет вам печатать и просматривать вывод JavaScript. Вы можете отправлять информацию на консоль с помощью console.log(). Например, этот код выведет на консоль "Naomi": Пример кода let developer = "Naomi"; console.log(developer); Приведенный выше код обращается к переменной developer по ее имени в console.log(). Обратите внимание, что значение в скобках — это значение, которое будет выведено. Выведите значение символьной переменной на консоль. Затем нажмите кнопку "Console", чтобы просмотреть консоль JavaScript.

// let character = 'Hello';
// console.log(character)

// -----------------------------------------------------------------

// Step 6
// When a variable is declared with the let keyword, you can reassign (or change the value of) that variable later on. In this example, the value of programmer is changed from "Naomi" to "CamperChan".

// Example Code
// let programmer = "Naomi";
// programmer = "CamperChan";
// Note that when reassigning a variable, you do not use the let keyword again.

// After your console.log, assign the value "World" to your character variable.

// let character = 'Hello';
// console.log(character);
// character = 'World';

// -----------------------------------------------------------------

// Шаг 7 Теперь снова выведите переменную вашего символа на консоль. Вы должны увидеть строку "Hello", а затем строку "World" в консоли.

// let character = 'Hello';
// console.log(character);
// character = "World";
// console.log(character);

// -----------------------------------------------------------------

// Шаг 8 Когда имена переменных состоят из более чем одного слова, существуют особые соглашения об именах для того, как вы пишете слова с заглавной буквы. В JavaScript соглашением является использование camel case. Camel case означает, что первое слово в имени полностью строчное, но все последующие слова пишутся с заглавной буквы. Вот несколько примеров camel case: Пример кода let variableOne; let secondVariable; let yetAnotherVariable; let thisIsAnAbsurdlyLongName; Используйте camel case для объявления новой переменной secondCharacter.

// let secondCharacter;

// -----------------------------------------------------------------

// Step 9
// When you declare a variable without initializing it, it is considered uninitialized. Currently, your secondCharacter variable is uninitialized.

// Add a console.log() to see what the value of your secondCharacter variable is.

// let character = 'Hello';
// console.log(character);
// character = "World";
// let secondCharacter;
// console.log(secondCharacter);

// -----------------------------------------------------------------

// The default value of an uninitialized variable is undefined. This is a special data type that represents a value that does not have a definition yet.

// You can still assign a value to an uninitialized variable. Here is an example:

// Example Code
// let uninitialized;
// uninitialized = "assigned";
// Assign the string "Test" to your secondCharacter variable below your declaration. Open the console to see how your log has changed.

// let character = 'Hello';
// console.log(character);
// character = "World";
// let secondCharacter;

// console.log(secondCharacter);
// secondCharacter = 'Test';
// console.log(secondCharacter);

// -----------------------------------------------------------------

// Step 11
// You can also assign the value of a variable to another variable. For example:

// Example Code
// let first = "One";
// let second = "Two";
// second = first;
// The second variable would now have the value "One".

// To see this in action, change your secondCharacter assignment from "Test" to your character variable.

// Then open the console to see what gets logged.

// let character = 'Hello';
// console.log(character);
// character = "World";
// let secondCharacter;
// secondCharacter = "Test";
// secondCharacter = character;

// ------------------------------------------------------------------

// Step 12
// You are now ready to declare your next variable. Remove both console.log statements, and the character reassignment.

// Also remove your secondCharacter variable, but leave the character initialization unchanged.

// let character = 'Hello';

// ----------------------------------------------------------------

// Step 13
// Before moving forward, you should take a moment to review the concepts you have learned.

// Use the let keyword to declare a profession variable and an age variable. Initialize profession with the string "teacher", but do not initialize age with any value.

// Log both of your variables to the console to see the results.

// let profession = 'teacher';
// let age;
// console.log(profession);
// console.log(age);

// ----------------------------------------------------------------

// Step 14
// Now that you have reviewed declaration and initialization, remove the code you wrote for your review.

// Do not remove your character variable.

// let character = "Hello";

// ----------------------------------------------------------------

// Step 15
// Use let to declare a count variable. Assign it the number 8. When using a number value, you do not use quotes. For example:

// Example Code 
// let money = 100;

// ----------------------------------------------------------------

// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//    rows.push(i); 
// }

// ----------------------------------------------------------------

// for (const row of rows) {
//   result = result + row;
// }

// --------------------------------------------------------------

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(i);  
// }

// ----------------------------------------------------------------

// Step 44
// Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your rows array, it's time to update your original loop.

// Instead of pushing i to the array, push the value of your character variable.

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character);
// }

// ----------------------------------------------------------------

// Step 45
// Now you have a series of # characters, but the pyramid shape is still missing. Fortunately, the i variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

// To achieve this, you will use the .repeat() method available to strings. This method accepts a number as an argument, specifying the number of times to repeat the target string. For example, using .repeat() to generate the string "Code! Code! Code!":

// Example Code
// const activity = "Code! ";
// activity.repeat(3);
// Use the .repeat() method on your character, and give it i for the number.

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i));
// }

// ----------------------------------------------------------------

// Step 46
// You're getting closer! At this point, you're encountering what's known as an off-by-one error, a frequent problem in zero-based indexing languages like JavaScript.

// The first index of your rows array is 0, which is why you start your for loop with i = 0. But repeating a string zero times results in nothing to print.

// To fix this, add 1 to the value of i in your.repeat() call.Do not assign it back to i like you did in your loop conditions.

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i + 1))
// }

// ----------------------------------------------------------------

// Step 47
// The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a function.

// A function is a block of code that can be reused throughout your application. Functions are declared with the following syntax:

// Example Code
// function name(parameter) {

// }
// The function keyword tells JavaScript that the name variable is going to be a function. parameter is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a for loop, the space between the curly braces is the function body.

// Declare a padRow function. Do not create any parameter variables yet.The function body should be empty.Remember that you need to use camel case for your naming convention.
  
// function padRow() {
  
// }

// ----------------------------------------------------------------

// Step 48
// In order to use a function, you need to call it. A function call tells your application to run the code from the function wherever you choose to call it. The syntax for a function call is the function name followed by parentheses. For example, this code defines and calls a test function.

// Example Code
// function test() {

// }
// test();
// Call your padRow function.

// function padRow() {

// }
// padRow()

// ----------------------------------------------------------------

// Step 49
// You are calling your padRow function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere.

// To see the result of calling your padRow function, declare a call variable and assign your existing padRow call to that variable.

// padRow();

// const call = padRow();

// ----------------------------------------------------------------

// Step 50
// Now add a log statement to print the value of your call variable.

// function padRow() {
 
// }
// const call = padRow();
// console.log(call);

// ----------------------------------------------------------------

// function padRow(name) {
//   return "Hello!";
// }

// ----------------------------------------------------------------

// function padRow(name) {
//   return name;
// }

// ----------------------------------------------------------------

// const call = padRow();
// padRow("Maxim")

// ----------------------------------------------------------------

// function addTwoNumbers (a, b) {
//   return a + b;
// }
// const sum = addTwoNumbers(5, 10)
// console.log(sum)

// ----------------------------------------------------------------

function padRow(name) {
  return character + name;
}

// ----------------------------------------------------------------

function padRow(name) {
  const test = "Testing";
  return character + name;
}

// ----------------------------------------------------------------

function padRow(name) {
  const test = "Testing";  
  return test;
}

// ----------------------------------------------------------------

function padRow(name) {
  const test = "Testing";
  console.log("This works!")  
  return test;
  console.log("This works!")
}

// ----------------------------------------------------------------

function padRow() {
  const test = "Testing";

  return test;

}
const call = padRow();
console.log(call);

// ----------------------------------------------------------------

function padRow() {
}
const call = padRow();
console.log(call);

// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------



// ----------------------------------------------------------------




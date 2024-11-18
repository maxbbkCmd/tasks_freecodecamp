
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
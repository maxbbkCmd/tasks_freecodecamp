// 🔃CamperBot пытается создать программу для случайной смены цвета фона. Но у них постоянно возникают проблемы, и им нужна ваша помощь, чтобы отладить код.

// CamperBot уже добавил HTML и CSS для проекта. Но они не могут понять, почему ни один из стилей и контента не отображается на странице.

// Когда они открывают консоль, то видят следующее сообщение:

// Example Code
// SyntaxError: unknown: Unexpected token, expected "," (5:2)

// Синтаксические ошибки возникают, когда движок JavaScript сталкивается с чем-то, что он не может интерпретировать. В данном случае, похоже, CamperBot имеет синтаксические ошибки в массиве darkColorsArr.

// Исправьте синтаксические ошибки в массиве darkColorsArr, и вы увидите, что содержимое и стили отображаются на странице.

const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// 💛 A ReferenceError is thrown when a non-existent variable is referenced. In this case, it looks like CamperBot is trying to use math but JavaScript doesn't have a math object.

// Fix CamperBot's error in the math.random() line and open up the console again.

console.log(darkColorsArr.length * Math.random())

// 💛 Обновите оператор консоли, чтобы вывести целое число от 0 до 9. Помните, что вы работали с методом в ролевой игре, который округляет число до ближайшего целого числа.


function getRandomIndex() {
  console.log(Math.floor(Math.random() * darkColorsArr.length ))
}
getRandomIndex();
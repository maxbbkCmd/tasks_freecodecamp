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

// 💛 TypeError означает, что код пытается выполнить операцию со значением, тип которого не соответствует ожидаемому. Исправьте TypeError, обновив метод document.queryselector до правильного имени метода, который выбирает элемент из DOM.

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("bg-hex-code");

console.log(bgHexCodeSpanElement);

// 💛CamperBot создал новую переменную bgHexCodeSpanElement для хранения ссылки на элемент span с идентификатором bg-hex-code. Однако при попытке записать эту переменную в консоль возвращается значение null. null — это особое значение в JavaScript, которое представляет отсутствие значения. Это может произойти при попытке доступа к свойству несуществующего объекта. В этом случае CamperBot не передает правильный селектор методу document.querySelector. Исправьте строку document.querySelector("bg-hex-code"), чтобы она правильно выбирала элемент с идентификатором bg-hex-code.

// const body = document.querySelector("body");
// const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// console.log(bgHexCodeSpanElement);

// 💛CamperBot теперь создал функцию changeBackgroundColor, которая изменяет цвет фона страницы на случайный цвет из массива darkColorsArr. Функция также отображает шестнадцатеричный код для этого нового цвета. Когда они пытаются протестировать эту функцию, они замечают, что цвет фона не меняется, а текст показывает следующее: Пример кода Шестнадцатеричный код: undefined undefined отображается здесь, потому что переменная цвета установлена ​​неправильно. Исправьте ошибку в строке darkColorsArr[getRandomIndex], чтобы переменная цвета была установлена ​​на случайный цвет из массива darkColorsArr.

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}
changeBackgroundColor();

// 💛 CamperBot пытается создать новую переменную с именем btn для хранения ссылки на элемент кнопки с идентификатором click-btn Однако, когда они пытаются зарегистрировать элемент кнопки в консоли, они видят, что элемент кнопки имеет значение null. Откройте index.html, чтобы увидеть правильное имя идентификатора для этого элемента кнопки. Затем исправьте ошибку для строки document.querySelector("#click-btn");.
const btn = document.querySelector("#btn");
console.log(btn);

// 💛


// 💛
var useDefs = false;

const descriptionArr = ["Photography", "Design_Work", "Game_Project"];

var currentWord = "";
var desWordIndex = 0;
var isTyping = false;
var index = 0;
var speed = 150;

function typeOut() {
  isTyping = true;
  // Determine the Next Word
  if (index < descriptionArr[desWordIndex].length) {
    document.getElementById("typewriter").innerHTML +=
      descriptionArr[desWordIndex].charAt(index);
    currentWord += descriptionArr[desWordIndex].charAt(index);
    console.log("CurrentWord: " + currentWord);
    index++;
    setTimeout(typeOut, speed);
  } else {
    isTyping = false;
  }
}

function typeIn() {
  isTyping = true;
  if (index >= 0) {
    currentWord = document
      .getElementById("typewriter")
      .innerHTML.substring(0, index);
    console.log("CurrentWord: " + currentWord);
    document.getElementById("typewriter").innerHTML = currentWord;
    index--;
    setTimeout(typeIn, speed);
  } else {
    typeOut();
  }
}

function nextDescWord() {
  if (!isTyping) {
    // Determine the Index of the Next Word
    if (desWordIndex == descriptionArr.length - 1) {
      desWordIndex = 0;
    } else {
      desWordIndex++;
    }
    // Delete the Current Word
    index = currentWord.length - 1;
    typeIn();
  }
}

function prevDescWord() {
  if (!isTyping) {
    // Determine the Index of the Next Word
    if (desWordIndex == 0) {
      desWordIndex = descriptionArr.length - 1;
    } else {
      desWordIndex--;
    }
    // Delete the Current Word
    index = currentWord.length - 1;
    typeIn();
  }
}

typeOut();

var useDefs = false;

const descriptionArr = [
  "Developer",
  "Skier",
  "Skater",
  "Designer",
  "Musician",
  "Photographer",
  "Freelancer",
];

const descriptionDefArr = [
  "Noun - a person or thing that develops something.",
  "Noun - a person who skis.",
  "Noun - a person who skates. Maybe Definitions weren't necessary...",
  "Noun - a person who plans the form, look, or workings of something before its being made or built, typically by drawing it in detail.",
  "Noun - a person who plays a musical instrument, especially as a profession... Im definetly not a professional.",
  "Noun - a person who takes photographs",
  "Noun - working for different companies at different times rather than being permanently employed by one company",
];

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
    if (useDefs) {
      setDef();
      showDef();
    }
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
    if (useDefs) hideDef();
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
    if (useDefs) hideDef();
    typeIn();
  }
}

function hideDef() {
  document
    .getElementById("def")
    .setAttribute(
      "style",
      "font-size:0;transition-duration: 1s;transition-timing-function: ease-in;"
    );
}

function setDef() {
  document.getElementById("def").innerHTML = descriptionDefArr[desWordIndex];
}

function showDef() {
  document
    .getElementById("def")
    .setAttribute(
      "style",
      "font-size:1em;transition-duration: 1s;transition-timing-function: ease-in;"
    );
}

function toggleDefs() {
  if (useDefs) {
    hideDef();
    useDefs = false;
    console.log(useDefs);
  } else {
    setDef();
    showDef();
    useDefs = true;
    console.log(useDefs);
  }
}

typeOut();

const canvas = document.getElementById("jumpManCanvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 700);
const CANVAS_HEIGHT = (canvas.height = 700);

const animation_sheet = new Image();
animation_sheet.src = "./src/images/JumpFrames/SpriteSheet.png";

const spriteWidth = 700;
const spriteHeight = 700;

var animIndex = 2;
var x = 2;
var y = 1;
var numFrames = 17;
var runFrame = 0;
var frameSpeedController = 20;

function setAnimation() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    animation_sheet,
    (x - 1) * spriteWidth,
    (y - 1) * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  requestAnimationFrame(setAnimation);
}

function runAnimation() {
  if (animIndex <= numFrames) {
    console.log(" RUN !");
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(
      animation_sheet,
      (x - 1) * spriteWidth,
      (y - 1) * spriteHeight,
      spriteWidth,
      spriteHeight,
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT
    );

    if (runFrame % frameSpeedController == 0) {
      animIndex++;

      if (x == 5) {
        y += 1;
        x = 1;
      } else {
        x += 1;
      }
    }

    requestAnimationFrame(runAnimation);
  }
  runFrame++;
}

function nextPage() {
  document
    .getElementById("mainSection")
    .setAttribute("style", "bottom: 100%; opacity: 0%;");
  document.getElementById("jumpManCanvas").setAttribute("style", "top: -700px");
  runAnimation();
}

setAnimation();

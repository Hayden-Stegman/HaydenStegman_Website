import * as THREE from "three";
import { gsap } from "gsap";

// CONSTANTS
let UI_FADE_DELAY = 1;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  1,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setClearColor(0xe5383b, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(650);
camera.position.setX(0);
camera.position.setY(0);

renderer.render(scene, camera);

const particleGeometry = new THREE.BufferGeometry();
const particlesCnt = 9000;

const posArray = new Float32Array(particlesCnt * 3);
for (let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = Math.random() * 2 - 1;
}

particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);
const material = new THREE.PointsMaterial({
  size: 6.2,
  color: "#1e2327",
});

const particlesMesh = new THREE.Points(particleGeometry, material);
scene.add(particlesMesh);

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const clock = new THREE.Clock();

let rotateSpeed = 0.00004;
let paralaxSpeed = 0.00001;

function animate() {
  const elapsedTime = clock.getElapsedTime();

  particlesMesh.position.y = mouseY * paralaxSpeed;
  particlesMesh.position.x = mouseX * paralaxSpeed;

  particlesMesh.rotateY(rotateSpeed);

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

function rotateToNewPage() {
  // Camera Zoom IN-and-OUT
  var ct1 = gsap.timeline({});
  ct1.to(camera.position, { delay: UI_FADE_DELAY, duration:1.4, ease: "sine.inOut", z: 500});
  ct1.to(camera.position, { delay: UI_FADE_DELAY, duration:1.6, ease: "sine.inOut", z: 50});
  
  // Square Rotation
  var max = 2.5;
  var min = 1.0;
  var rotationSpeedX = min + Math.random() * (max - min)
  var rotationSpeedY = min + Math.random() * (max - min)
  console.log("X: " + rotationSpeedX);
  console.log("Y: " + rotationSpeedY);
  gsap.to(particlesMesh.rotation, { delay: UI_FADE_DELAY, duration:1.4, ease: "sine.inOut", z: rotationSpeedX});
  gsap.to(particlesMesh.rotation, { delay: 1 + UI_FADE_DELAY, duration:1.4, ease: "sine.inOut", x: rotationSpeedY});
  
  ct1.play();
}
document.addEventListener("DOMContentLoaded", function () {
  const divToClick = document.querySelector(".nextPageButton");
  if (divToClick) {
    divToClick.addEventListener("click", rotateToNewPage);
  }
});

function siteLoad() {
    // gsap.to(particlesMesh.rotation, { duration: 2, ease: "none", x: 90})
    var ct1 = gsap.timeline({});
    ct1.to(camera.position, { duration:2, ease: "sine.inOut", z: 50});
    
    gsap.to(particlesMesh.rotation, { duration:2, ease: "sine.Out", z: Math.floor(Math.random() * 3) + 1});
    gsap.to(particlesMesh.rotation, { duration:2, ease: "sine.Out", x: Math.floor(Math.random() * 3) + 1});
    
    ct1.play();
}

siteLoad();
animate();
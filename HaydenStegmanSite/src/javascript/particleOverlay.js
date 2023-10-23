import * as THREE from "three";
import { Clock, Material } from "three";

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

renderer.setClearColor(0x161a1d, 1);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(60);

renderer.render(scene, camera);

const particleGeometry = new THREE.BufferGeometry();
const particlesCnt = 5000;

const posArray = new Float32Array(particlesCnt * 3);
for (let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() * 5 - 2.5) * 3;
}

particleGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(posArray, 3)
);
const material = new THREE.PointsMaterial({
  size: 0.5,
  color: "#B1A7A6",
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

let snowFallSpeed = 0.03;
let paralaxSpeed = 0.00001;

function animate() {
  const elapsedTime = clock.getElapsedTime();

  particlesMesh.position.y =
    mouseY * paralaxSpeed - elapsedTime * snowFallSpeed;
  particlesMesh.position.x = mouseX * -paralaxSpeed;

  if (particlesMesh.position.y < -6) {
    particlesMesh.position.y = 7;
    clock.start();
  }

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

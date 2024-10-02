import * as THREE from "three";
import { gsap } from "gsap";

// CONSTANTS
let UI_FADE_DELAY = 0;

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
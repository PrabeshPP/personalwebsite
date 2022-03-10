import * as Three from "three";

const scene=new Three.Scene();
const camera=new Three.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new Three.WebGLRenderer();
console.log(scene);
console.log(camera);
console.log(renderer);

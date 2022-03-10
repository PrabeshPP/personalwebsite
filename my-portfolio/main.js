import * as Three from "three";

const scene=new Three.Scene();
const camera=new Three.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000);
const renderer=new Three.WebGLRenderer();

// adding the dom

renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const boxGeometry=new Three.BoxGeometry(1,1,1);
const material=new Three.MeshBasicMaterial({color:0xFFA07A})


const mesh=new Three.Mesh(boxGeometry,material);


scene.add(mesh);
camera.position.z=5;

function animate(){
  renderer.render(scene,camera);
  mesh.rotation.x+=0.01;
  mesh.rotation.y+=0.01
  requestAnimationFrame(animate);


  }
 



animate();


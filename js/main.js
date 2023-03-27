import '../style.css'
import * as THREE from 'three';

const scene =new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000);

const renderer= new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

renderer.render(scene,camera);

const bgTexture = new THREE.TextureLoader().load('./assets/img/textures/pexels-sasha-martimov-1260727.jpg');
scene.background= bgTexture;

const geometry = new THREE.TorusGeometry(8,3,16,37)
const material = new THREE.MeshStandardMaterial({color: 0x222});
const torus= new THREE.Mesh(geometry, material);
scene.add(torus);

const avatartexture = new THREE.TextureLoader().load('jpg.jpg')
const avatar = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial( {map: avatartexture})
  
);
avatar.position.set(1,0,-2);
scene.add(avatar);

const pointLight = new THREE.PointLight(0xf1f1f1)
pointLight.position.set(200,200,200)

const pointLight2 = new THREE.PointLight(0xaaaaaa)
pointLight.position.set(100,100,50)

scene.add(pointLight, pointLight2);

const geo = new THREE.ConeGeometry( 5, 18, 32 );
const materiel = new THREE.MeshStandardMaterial( {color: 0x222} );
const cone = new THREE.Mesh( geo, materiel );
cone.position.set(-40,0,5);
scene.add( cone );

const metry = new THREE.CylinderGeometry( 5, 5, 140, 142 );
const materials = new THREE.MeshStandardMaterial( {color: 0xDF1C1C} );
const cylinder = new THREE.Mesh( metry, materials );
cylinder.position.set(-70,0,125);
scene.add( cylinder );

function addsphere(){
  const geometry = new THREE.SphereGeometry(2,1,1);
  const matherial = new THREE.MeshStandardMaterial( {color : 0x8e3535})
  const sphere = new THREE.Mesh(geometry, matherial);

  const [x,y,z] = Array(50).fill().map(() => THREE.MathUtils.randFloatSpread(80));

  sphere.position.set(x,y,z);
  scene.add(sphere)
} 



Array(3).fill().forEach(addsphere)

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.001;
  torus.rotation.y += 0.0005;
  avatar.rotation.y += 0.0005;
  avatar.rotation.x -= 0.0001;
  cylinder.rotation.x += 0.0001;
  cylinder.rotation.y += 0.001;
  renderer.render(scene,camera);
}

function movecamera(){
  const t = document.body.getBoundingClientRect().top;
  cone.rotation.x += 0.05;
  cone.rotation.y += 0.075;
  cone.rotation.z += 0.05;

  camera.position.z= t* -0.01;
  camera.position.x= t* -0.0002;
  camera.rotation.y= t* -0.0002;

}
document.body.onscroll = movecamera;

animate()
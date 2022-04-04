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

const bgTexture = new THREE.TextureLoader().load('https://i.ibb.co/W2jXZQF/jpg.jpg" alt="atoportrait"');
scene.background= bgTexture;

const geometry = new THREE.TorusGeometry(15,3,16,370)
const material = new THREE.MeshStandardMaterial({color: 0xDF1C1C});
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
const materiel = new THREE.MeshStandardMaterial( {color: 0xFFC300} );
const cone = new THREE.Mesh( geo, materiel );
cone.position.set(-40,0,5);
scene.add( cone );

const metry = new THREE.CylinderGeometry( 5, 5, 140, 142 );
const materials = new THREE.MeshStandardMaterial( {color: 0xDF1C1C} );
const cylinder = new THREE.Mesh( metry, materials );
cylinder.position.set(-70,0,125);
scene.add( cylinder );

function addsphere(){
  const geometry = new THREE.SphereGeometry(0.25,24,24);
  const matherial = new THREE.MeshStandardMaterial( {color : 0xDF1C1C})
  const sphere = new THREE.Mesh(geometry, matherial);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));

  sphere.position.set(x,y,z);
  scene.add(sphere)
} 

function addyellowsphere(){
  const geometry = new THREE.SphereGeometry(0.35,21,21);
  const matherial = new THREE.MeshStandardMaterial( {color : 0xFFC300})
  const sphere = new THREE.Mesh(geometry, matherial);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));

  sphere.position.set(x,y,z);
  scene.add(sphere)
} 


Array(200).fill().forEach(addsphere)
Array(300).fill().forEach(addyellowsphere)

function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  avatar.rotation.y += 0.005;
  avatar.rotation.x -= 0.001;
  cylinder.rotation.x += 0.001;
  cylinder.rotation.y += 0.01;
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

//JS Natif

$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
      // scroll-up button show/hide script
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      }else{
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: [" Designeuse", " Développeur Front", " Développeur Back"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: [" Designeuse", " Développeur Front", " Développeur Back"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

});